export const convertTimestampToDatetime = (timeStamp) => {
  let date = new Date(timeStamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  return `${hours}:${minutes.substr(-2)}`;
};

export const getZone = (date) => {
  let value = 0;
  let timeOffset = date.getTimezoneOffset();
  switch (timeOffset) {
    case 120:
      value = 7200;
      break;
    case -120:
      value = -7200;
      break;
    case 60:
      value = 3600;
      break;
    case -60:
      value = -3600;
      break;
    default:
      value = -1;
  }
  return value;
};

export const getFormattedDate = (date) => {
  let formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  formattedDate = formattedDate.split("/").reverse();
  return `${formattedDate[0]}-${formattedDate[2]}-${formattedDate[1]}`;
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const lastFive = (array) => {
  return array.slice(-5);
};

export const getFormattedDetailsDate = (date) => {
  let formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  formattedDate = formattedDate.split("/").reverse();
  return `${formattedDate[1]}.${formattedDate[2]}.${formattedDate[0]}`;
};

