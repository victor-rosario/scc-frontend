import {
    Box,
    FormControl,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material"
import { DateCalendar } from "@mui/x-date-pickers"
// import { IAppointment } from "@providers/appointment/appointment.interface"
import { IRequestPayload } from "@providers/request/request.interface"
import { isHoliday } from "@utils/dates/dates.util"
import dayjs from "dayjs"
import { useState, useMemo, useEffect } from "react"
import { addPayloadRequest } from "@redux/slices/request";
import { dispatch } from "@redux/store"
// import appointmentsProvider from "@providers/appointment/appointment.provider"

interface IScheduleData {
    time: string,
}

interface ICalendarSchedule {
    error: IRequestPayload | null,
}

const CalendarSchedule = ({ error }: ICalendarSchedule) => {

    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    // const [appointments, setAppointments] = useState<IAppointment[]>([])
    const [isActive, setIsActive] = useState(false)
    const [scheduleData, setScheduleData] = useState<IScheduleData>({ time: dayjs().format('YYYY-MM-DDTHH:mm:ss').toString() })

    const datetime = useMemo(() => {

        const parsedDate = dayjs(scheduleData.time);

        parsedDate.add(0, 'hours')
        parsedDate.add(0, 'minutes')
        parsedDate.add(0, 'seconds')

        const dayOfWeek = parsedDate.format('dddd');
        const month = parsedDate.format('MMMM');
        const dayOfMonth = parsedDate.format('D');

        return `${dayOfWeek}, ${month} ${dayOfMonth}`

    }, [scheduleData])

    // const getAppointments = () => {
    //     appointmentsProvider.getAll({
    //         time: scheduleData.time
    //     }).then(appointments => setAppointments(appointments))
    // }

    // const dateFormatted = () => {
    //     const formatted = appointments.map(appointment => {
    //         const { count, time } = appointment
    //         const dateTime = new Date(time)
    //         const label = dateTime.toLocaleTimeString([], {
    //             hour: '2-digit',
    //             minute: '2-digit',
    //         })
    //         const value = dateTime.getHours()

    //         return {
    //             count,
    //             label,
    //             value,
    //             time: dateTime.toString()
    //         }
    //     })

    //     setTimes(formatted)
    // }

    const handleScheduleChange = (name: string, value: number | string | undefined) => {
        setScheduleData(prev => ({ ...prev, [name]: value }))
    }

    // useEffect(() => {
    //     if (!appointments.length) return
    //     dateFormatted()
    // }, [JSON.stringify(appointments)])

    // useEffect(() => {
    //     if (!scheduleData.time) return
    //     getAppointments()
    // }, [scheduleData.time])

    useEffect(() => {
        if (!scheduleData.time) return

        const time = new Date(scheduleData.time)

        dispatch(addPayloadRequest({ schedule: time.toISOString() }))

    }, [JSON.stringify(scheduleData)])

    useEffect(() => {
        if (error && error['schedule']) {
            setIsActive(true)
        }
        if (scheduleData.time) {
            setIsActive(false)
        }
    }, [JSON.stringify(scheduleData), JSON.stringify(error)])

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Grid container direction={matchDownMd ? 'column' : 'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                            <Grid item sx={{ width: matchDownMd ? '100%' : '50%' }}>
                                <Box sx={{ border: 1, borderRadius: 2 }}>
                                    <DateCalendar
                                        value={scheduleData.time ? dayjs(scheduleData.time) : null}
                                        disablePast
                                        autoFocus
                                        shouldDisableDate={isHoliday}
                                        onChange={((value) => {
                                            handleScheduleChange('time', value?.format('YYYY-MM-DDTHH:mm:ss').toString())
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
                                    {(isActive) ? error?.['schedule'] : datetime}
                                </Typography>
                                {/* <Grid item container spacing={1} gap={1}>
                                    {times.map(({ label, value, count, time }) => (
                                        <Grid key={`${label}`} item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Button
                                                disabled={count >= 4 || isValidScheduleDate(time)}
                                                variant={scheduleData.hour === value ? 'contained' : 'outlined'}
                                                value={value}
                                                color={((error && error['schedule'])) ? 'error' : 'primary'}
                                                sx={{ borderRadius: 2, width: "50%" }}
                                                onClick={() => handleScheduleChange('hour', value)}
                                            >
                                                {label}
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