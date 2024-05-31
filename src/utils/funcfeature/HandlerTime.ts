import moment from 'moment-timezone';

const DAY_SUB_CONFIG = 30;
const MILI_SUB_END_DAY = 1;

export const getTimestamp = (DAY_SUB = DAY_SUB_CONFIG) => {
  const currentTime = moment();
  const fromTime = currentTime
    .clone()
    .subtract(DAY_SUB, 'days')
    .endOf('day')
    .subtract(MILI_SUB_END_DAY, 'second');
  const toTime = currentTime.clone().endOf('day');
  return {
    fromTimeTimestamp: fromTime.unix(),
    toTimeTimestamp: toTime.unix(),
  };
};

export const getCurrentTimeFrame = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 6 && currentHour < 11) {
    return 0;
  } else if (currentHour >= 11 && currentHour < 16) {
    return 1;
  } else {
    return 2;
  }
};

export const getCurrentTime = () => {
  const currentTime = moment().tz('Asia/Ho_Chi_Minh');
  const formattedTime = currentTime.format('DD-MM-YYYY');
  return formattedTime;
};

export const convertTimeStamp = (
  valueConvert: number,
  format = 'DD-MM-YYYY',
) => {
  if (
    typeof valueConvert !== 'undefined' &&
    valueConvert !== null &&
    valueConvert !== 0
  ) {
    if (valueConvert.toString().length > 13) {
      valueConvert *= 1000;
    }
    if (valueConvert.toString().length === 10) {
      valueConvert *= 1000;
    }
    return moment(valueConvert).format(format);
  } else {
    return 'N/A';
  }
};

export const timeDisplay = (startTime: number, endTime: number) => {
  const startMoment = moment.unix(startTime).utcOffset(7);
  const endMoment = moment.unix(endTime).utcOffset(7);
  if (startTime === 0 || endTime === 0) {
    return '___';
  }

  const duration = moment.duration(endMoment.diff(startMoment));

  const totalMinutes = duration.asMinutes();

  return totalMinutes.toFixed(0);
};

export function getNowTimestamp(): number {
  const currentTime = moment();
  const formattedTime = currentTime.clone().unix();
  return formattedTime;
}

export function formatDate(dateString: string): string {
  return moment(dateString).format('DD-MM');
}

export const convertIsoToTimeStamp = (isoTime: string): number => {
  const vietnamTimeZone: string = 'Asia/Ho_Chi_Minh';
  const timestamp: number = moment.tz(isoTime, vietnamTimeZone).valueOf();
  return timestamp / 1000;
};

export const add30DaysToTimeStamp = (timeStamp: number): number => {
  const originalMoment = moment.unix(timeStamp);

  const newMoment = originalMoment.add(30, 'days');

  const newTimeStampInSeconds = newMoment.unix();

  return newTimeStampInSeconds;
};
