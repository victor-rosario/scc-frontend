import {
    Divider,
    FormControl,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";
import { QuestionsObjectI } from "@redux/slices/whodas/question/question.interface";
import { useEffect, useState } from "react";
import { FormInputWhodaProps, IQuestion } from "./input.interface";
import { useAppSelector, dispatch } from "@redux/store";
import { updateWhodaQuestion } from "@redux/slices/whodas/question";

const headers = ["Fácil", "Poco", "Moderada", "Complicada", "Imposible"]

const FormInputWhoda = <T extends object>({
    fields,
}: FormInputWhodaProps<T>) => {

    const { payloadQuestions } = useAppSelector(x => x.whodaQuestion)
    const [questionHistory, setQuestionHistory] = useState<Record<string, number | undefined>>({})
    const [result, setResult] = useState<number>(0)
    const theme = useTheme()

    const formatterQuestions = (questions: IQuestion[]) => {

        if (!questions.length && Object.keys(payloadQuestions).length) return

        const formatter = questions.reduce((acc, item) => {

            const value = questionHistory[item.uuid]

            acc[item.uuid] = {
                question: item.question,
                value: value === 0 ? 0 : !value ? -1 : value
            };
            return acc
        }, {} as QuestionsObjectI)

        dispatch(updateWhodaQuestion({
            payloadQuestions: formatter
        }))
    }

    const handleQuestionChange = (uuid: string, value: number) => {

        setQuestionHistory(prev => ({ ...prev, [uuid]: value }))

        const payload = {
            ...payloadQuestions,
            [uuid]: {
                ...payloadQuestions[uuid],
                value
            }
        }
        dispatch(updateWhodaQuestion({ payloadQuestions: payload }))
    }

    useEffect(() => {
        const fieldsData = fields.filter(field => field.type === 'question')

        const questions = fieldsData.reduce((acc, item) => {

            const options = item.options
            if (!options) return acc

            const questions = options.map(item => ({ uuid: item.value, question: item.label }))

            return [...questions]
        }, [] as IQuestion[])

        formatterQuestions(questions)

    }, [JSON.stringify(fields)])

    useEffect(() => {
        if (!payloadQuestions) return setResult(0)

        const count = Object.entries(payloadQuestions).reduce((acc, item) => {
            const [, { value }] = item
            acc += +value
            return acc
        }, 0)

        setResult(count <= 0 ? 0 : count)

    }, [payloadQuestions])

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                {fields.map((field, index) => {
                    return (
                        <Grid
                            item
                            {...field.responsive ? field.responsive : {}}
                            key={`field-${index}`}
                        >
                            {field.type === 'divider' && (
                                <Divider>
                                    {field.label && (
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {field.label}
                                        </Typography>
                                    )}
                                </Divider>
                            )}
                            {field.type === 'question' && (
                                <FormControl fullWidth>
                                    <Grid key={`field-list-${index}`} container spacing={1} padding={1} alignItems='center'>
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ width: "calc(100% - 24px)" }}>
                                                            <Typography fontSize={14} fontWeight={"700"} variant="h3" color={theme.palette.primary.main}>
                                                                Valor de preguntas {result}
                                                            </Typography>
                                                        </TableCell>
                                                        {(headers).map((header) => (
                                                            <TableCell align="left" key={`list-option-${header}`}>
                                                                {header}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                {(Object.entries(payloadQuestions)).map(([uuid, { value, question }]) => (
                                                    <TableBody
                                                        key={`field-table-row-${uuid}`}
                                                        component={RadioGroup}
                                                        name={uuid}
                                                        onChange={(_, radio) => handleQuestionChange(uuid, +radio)}
                                                    >
                                                        <TableRow hover key={`field-table-row-${index}`}>
                                                            <TableCell width={"70%"} align="left">
                                                                <Typography variant="h5">{question}</Typography>
                                                            </TableCell>

                                                            {headers.map((header, index) => (
                                                                <TableCell key={`${header}`}>
                                                                    <Radio aria-label={header} value={index} checked={value === index} />
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableBody>
                                                ))}
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </FormControl>
                            )}
                            {field.type === 'paragraph' && (
                                <FormControl fullWidth>
                                    {(field.paragraphs || []).map((paragraph, index) => (
                                        <Typography fontSize={16} paragraph key={`${paragraph}-${index}`} variant="h5">{paragraph}</Typography>
                                    ))}
                                </FormControl>
                            )}
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default FormInputWhoda