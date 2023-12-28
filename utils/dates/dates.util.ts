import dayjs, { Dayjs } from "dayjs";

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const convertDateTimeToDate = (inputDateTime: string | number | Date): string => {
  const dateObject = new Date(inputDateTime);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const getDominicanHolidays = (year: number): string[] => [
  `${year}-02-27`, // Example: Independence Day
  `${year}-01-01`, // New Year's Day
  `${year}-01-06`, // Epiphany
  `${year}-01-21`, // Independence Day
  `${year}-01-26`, // Duarte's Day
  `${year}-02-27`, // Independence Day
  `${year}-04-14`, // Good Friday
  `${year}-05-01`, // Labor Day
  `${year}-06-29`, // Corpus Christi
  `${year}-08-16`, // Restoration Day
  `${year}-09-24`, // Our Lady of Mercedes
  `${year}-11-06`, // Constitution Day
  `${year}-12-25`, // Christmas Day
];

export const isHoliday = (time: Dayjs): boolean => {
  const day = dayjs(time).day()

  if (day === 0 || day === 6) return true

  const holidays = getDominicanHolidays(time.year());
  const formattedTime = dayjs(time).format('YYYY-MM-DD');

  if (holidays.includes(formattedTime)) return true;

  return false
};
