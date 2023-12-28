import useConfig from "@hooks/useThemeConfig";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CancelIcon from '@mui/icons-material/Cancel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import daterangepicker from 'daterangepicker';
import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export interface HandleChangeEventDateRangePickerI {
    (dates: { start: Date, end: Date } | null): void;
}

const CustomDateRangePicker = ({ onChange, keyName }: { keyName: string, onChange?: HandleChangeEventDateRangePickerI }) => {

    const theme = useTheme();
    const { borderRadius } = useConfig();

    const [filterName, setFilterName] = useState<string | null>(null)
    const [dateFilter, setDateFilter] = useState<{ start: Date, end: Date } | null>(null)
    const { t: tGeneral } = useTranslation("general")
    const elementId = `reportDateRange-${keyName.toLocaleLowerCase()}Id`;

    const datePickerRef = useRef<daterangepicker | null>(null)

    useEffect(() => {
        const Ranges = document.getElementById(elementId)
        if (Ranges) {
            datePickerRef.current = new daterangepicker(Ranges, {
                opens: "left",
                alwaysShowCalendars: true,
                startDate: dateFilter?.start,
                endDate: dateFilter?.end,
                autoUpdateInput: false,
                autoApply: false,
                applyButtonClasses: "px-3 py-2 btn-primary",
                cancelButtonClasses: "px-3 py-2 btn-danger",
                ranges: {
                    'Today': [dayjs().toDate(), dayjs().toDate()],
                    'Yesterday': [dayjs().subtract(1, 'day').toDate(), dayjs().subtract(1, 'day').toDate()],
                    'Last 7 Days': [dayjs().subtract(6, 'day').toDate(), dayjs().toDate()],
                    'Last 30 Days': [dayjs().subtract(29, 'day').toDate(), dayjs().toDate()],
                    'This Month': [dayjs().startOf('month').toDate(), dayjs().endOf('month').toDate()],
                    'Last Month': [dayjs().subtract(1, 'month').startOf('month').toDate(), dayjs().subtract(1, 'month').endOf('month').toDate()],
                },
            }, (start, end, item) => {
                if (typeof item === 'string') setFilterName(item)

                const _start = start.toDate()
                const _end = end.toDate()

                setDateFilter((prevDate) => ({ ...prevDate, start: _start, end: _end }));
                onChange && onChange({ start: _start, end: _end })
            })
        }

        return () => {
            if (datePickerRef.current) datePickerRef.current.remove()
        }
    }, [])

    const resetDateFilter = () => {
        setDateFilter(null)
        setFilterName(null)
        onChange && onChange(null)
        datePickerRef.current = null;
    }

    return (
        <Stack
            id={elementId}
            direction="row"
            spacing={1.5}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
                p: 1,
                borderRadius: `${borderRadius}px`,
                border: "1px solid rgb(131, 128, 128)"
            }}
        >
            <CalendarMonthIcon fontSize="small" />
            <Typography variant="subtitle2">
                {dateFilter ?
                    filterName?.includes("Range") ? `${dayjs(dateFilter.start).format('dd, MMMM D')} - ${dayjs(dateFilter.end).format('dd, MM D')}` : filterName
                    : tGeneral("Select a range of dates", "Select a range of dates")}
            </Typography>

            <Stack direction={"row"} spacing={0.5} justifyContent={"center"} alignItems={"center"}>
                <ExpandMoreIcon />
                {dateFilter && <CancelIcon fontSize={"small"} sx={{ cursor: "pointer", color: theme.palette.error.dark }} onClick={resetDateFilter} />}
            </Stack>
        </Stack>
    )
}

export default CustomDateRangePicker