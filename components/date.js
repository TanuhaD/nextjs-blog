import { parseISO, format } from "date-fns";

export default function FormattedDate({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy d MMMM")}</time>;
}
