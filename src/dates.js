import { parse, format } from "date-fns";


export function parseAndFormatDate(date) {
    const date = parse(date, "yyyy-MM-dd", new Date());
    const dayName = format(date, "EEEE");
    console.log(dayName)
    return dayName;
}