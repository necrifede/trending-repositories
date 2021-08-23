import { format, subWeeks } from "date-fns";

export const getAWeekAgo = (date) => format(subWeeks(date, 1), "yyyy-MM-dd");
