import moment from 'moment';
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