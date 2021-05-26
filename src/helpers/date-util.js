import dayjs from 'dayjs';
export const DATE_FORMAT_EXPRESS = 'YYYY-MM-DD HH:mm:ss';

export const DateFormatter = (ts, formatExpress = DATE_FORMAT_EXPRESS) => {
  if (ts === undefined || ts === null || ts <= 0) return '';
  return dayjs().format(formatExpress);
};
