//fixes date from yyyy-mm-dd to mm-dd-yyyy
export const dateFixer = (date: String | undefined) => {
  if (date) {
    date = date.slice(0, 10);
    let splicedYear = date.slice(0, 4);
    let monthAndDay = date.slice(5);

    return `${monthAndDay}-${splicedYear}`;
  }
};
