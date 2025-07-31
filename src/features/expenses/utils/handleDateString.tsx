const handleDateString = (date_: Date | string) => {
  const date = new Date(date_);
  const now = new Date();

  const isSameUTCDate =
    date.getUTCFullYear() === now.getUTCFullYear() &&
    date.getUTCMonth() === now.getUTCMonth() &&
    date.getUTCDate() === now.getUTCDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  const paddedMinutes = String(minutes).padStart(2, "0");

  const timeString = `${hour12}:${paddedMinutes} ${ampm}`;

  if (isSameUTCDate) {
    // return `Today ${timeString}`;
    return `Today`;
  }

  const formattedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
//   return `${formattedDate} ${timeString}`;
  return `${formattedDate}`;

};
export default handleDateString;
