import {
    Box,
    FormControl,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material"
import { DateCalendar } from "@mui/x-date-pickers"
import { isHoliday } from "@utils/dates/dates.util"
import dayjs, { Dayjs } from "dayjs"
import { useState, useMemo } from "react"

interface IScheduleData {
    time: Dayjs | null,
    hour: string
}

const CalendarSchedule = () => {

    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const [scheduleData, setScheduleData] = useState<IScheduleData>({ hour: "", time: null })

    const datetime = useMemo(() => {

        if (!scheduleData.hour && !scheduleData.time) {
            const parsedDate = dayjs();
            parsedDate.add(0, 'hours')
            parsedDate.add(0, 'minutes')
            parsedDate.add(0, 'seconds')

            const dayOfWeek = parsedDate.format('dddd');
            const month = parsedDate.format('MMMM');
            const dayOfMonth = parsedDate.format('D');

            return `${dayOfWeek}, ${month} ${dayOfMonth}`
        }

        const [hour, minute] = scheduleData.hour.split(":");
        const parsedDate = dayjs(scheduleData.time);

        parsedDate.add(Number(hour), 'hours')
        parsedDate.add(Number(minute), 'minutes')
        parsedDate.add(0, 'seconds')

        const dayOfWeek = parsedDate.format('dddd');
        const month = parsedDate.format('MMMM');
        const dayOfMonth = parsedDate.format('D');

        return `${dayOfWeek}, ${month} ${dayOfMonth}`

    }, [scheduleData])

    const handleScheduleChange = (name: string, value: Dayjs | number | string | null) => {
        setScheduleData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Grid container direction={matchDownMd ? 'column' : 'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                            <Grid item sx={{ width: matchDownMd ? '100%' : '50%' }}>
                                <Box sx={{ border: 1, borderRadius: 2 }}>
                                    <DateCalendar
                                        value={scheduleData.time}
                                        disablePast
                                        autoFocus
                                        shouldDisableDate={isHoliday}
                                        onChange={((value) => {
                                            handleScheduleChange('time', value)
                                        })}
                                        sx={{
                                            "& .MuiPickersDay-root": {
                                                "&.Mui-selected": {
                                                    backgroundColor: theme.palette.primary.main,
                                                },
                                                "&.Mui-selected:hover": {
                                                    backgroundColor: theme.palette.primary.main,
                                                },
                                            },
                                            "& .MuiPickersDay-root:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                                color: "white",
                                            },
                                            "& .MuiPickersDay-root:focus": {
                                                backgroundColor: theme.palette.primary.main,
                                                color: "white",
                                                "&.Mui-selected": {
                                                    backgroundColor: theme.palette.primary.main,
                                                },
                                            }
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item container sx={{ width: matchDownMd ? '100%' : '50%' }} spacing={1} gap={1} alignItems={'center'} justifyContent={'center'}>
                                <Typography textAlign={'center'} variant="h4" textTransform={'capitalize'} paddingTop={matchDownMd ? 2 : 0}>
                                    {datetime}
                                </Typography>
                                {/* <Grid item container spacing={1} gap={1}>
                                    {[
                                        '08:00 AM',
                                        '09:00 AM',
                                        '10:00 AM',
                                        '11:00 AM',
                                        '12:00 PM',
                                        '01:00 PM',
                                        '02:00 PM',
                                        '03:00 PM',
                                        '04:00 PM'
                                    ].map((num) => (
                                        <Grid key={`${num}`} item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Button
                                                disabled={!scheduleData.time}
                                                variant={scheduleData.hour === num ? 'contained' : 'outlined'}
                                                value={num}
                                                sx={{ borderRadius: 2, width: "50%" }}
                                                onClick={() => handleScheduleChange('hour', num)}
                                            >
                                                {num}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CalendarSchedule