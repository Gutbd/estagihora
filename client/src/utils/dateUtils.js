import { parseISO, format } from "date-fns";

// yyyy-mm-dd string  format to dd/mm/yyyy string format
export const toDateFormat = (stringDate) => {
  let parts = stringDate.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

// UTC string format to HH:mm:ss string format
export const utcDateTimeToString = (utcDateTime) => {
  let dateISO = parseISO(utcDateTime);
  let formattedString = format(dateISO, "HH:mm:ss");
  return formattedString;
};
