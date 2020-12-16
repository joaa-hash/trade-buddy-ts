import { Trade } from "../Interfaces";

export const required = (value: any) => (value ? undefined : "Required");
export const maxLength = (max: number) => (value: string | any[]) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength5 = maxLength(5);
export const minLength = (min: number) => (value: string | any[]) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const number = (value: any) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const onlyAlpha = (value: string) =>
  value && /[^a-zA-Z ]/i.test(value) ? "Only alphabet characters" : undefined;

export const filterTrade = (trades: Trade[], param: String) => {
  const trade = trades.filter((trade) => {
    return trade.id.toString() === param;
  });
  const tradeObject = trade[0];
  tradeObject.start_date =
    (new Date(tradeObject.start_date) as any) || new Date();
  if (tradeObject.end_date) {
    tradeObject.end_date =
      (new Date(tradeObject.end_date) as any) || new Date();
  }
  return { ...tradeObject };
};
