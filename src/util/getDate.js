export const getDate = (conract) => {
  const dateString = conract.slice(2);
  const [year, month, day, hour] = dateString.match(/.{1,2}/g);
  return `20${year}.${month}.${day} - ${hour}.00`;
};
