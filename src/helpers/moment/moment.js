import moment from "moment/moment";

export const Moment = (format, date) => {
  if (!date || !format) {
    return null;
  }
  return moment(Number(date)).format(format.toString());
};
