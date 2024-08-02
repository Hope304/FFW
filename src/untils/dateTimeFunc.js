import moment from 'moment';
import uuid from 'react-native-uuid';
export const compareDate = (date1, date2) => {
  const beforeDate = moment(date1, 'DD/MM/YYYY').startOf('day');
  const afterDate = moment(date2, 'DD/MM/YYYY').startOf('day');

  if (beforeDate <= afterDate) {
    return true;
  } else {
    return false;
  }
};

export const formatDate = date => {
  const dateFormat = moment(date).format('DD/MM/YYYY');
  return dateFormat;
};

export const formatDateToPost = date => {
  const postFormat = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  return postFormat;
};

export const generateID = num => {
  const idGenerate = uuid.v4().slice(0, num || 6);

  return idGenerate;
};


export const getCurrentTime = () => {
  const today = new Date();
  const hour =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minute =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

  const halfDay = today.getHours() <= 12 ? 'am' : 'pm';

  return `${hour}:${minute}${' ' + halfDay}`;
};

export const getCurrentDate = () => {
  const date = moment(new Date()).format('DD/MM/YYYY');

  return date;
};

