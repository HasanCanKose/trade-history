export const getSortedValues = (totalValues, dates) => {
  totalValues.sort(function (firstEl, secondEl) {
    return ("" + firstEl.conract).localeCompare(secondEl.conract);
  });

  dates.sort((firstEl, secondEl) => {
    return ("" + firstEl).localeCompare(secondEl);
  });
};
