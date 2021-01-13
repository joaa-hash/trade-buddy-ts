export const getTotalAnalysis = () => {
  let endDateDate = new Date();
  let endDateYear = `${endDateDate.getFullYear()}`;
  let endDateMonth = `0${endDateDate.getMonth() + 1}`.slice(-2);
  let endDateDay = `0${endDateDate.getDate()}`.slice(-2);
  let endDateString = `${endDateYear}-${endDateMonth}-${endDateDay}`;

  const formData = {
    startDate: "1900-01-01",
    endDate: endDateString,
    typeOfTrade: "both",
  };

  return formData;
};
