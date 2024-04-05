import { parse, format } from "date-fns";


export function parseAndFormatDate(date) {
    const thatDay = parse(date, "yyyy-MM-dd", new Date());
    const dayName = format(thatDay, "EEEE");
    console.log(dayName)
    return dayName;
};