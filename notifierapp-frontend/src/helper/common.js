// Moment.js
const moment = window.moment;

// Render Time (with format)
export function renderTime(dateObject, format = "DD-MMM-YYYY hh:mma") {
  let t = moment(dateObject).format(format);
  return t;
}
