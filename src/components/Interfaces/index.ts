interface MyFormProps {
  id: Number;
  ticker: string;
  number_of_shares: Number;
  short_or_long: string;
  buy_price: Number;
  sell_price: Number;
  short_price: Number;
  cover_price: Number;
  day_or_swing: string;
  start_date: string;
  end_date: string;
}

interface AnalysisProps {
  numberOfTrades?: Number;
  winningTrades?: Number;
  losingTrades?: Number;
  dayTrades?: Number;
  swingTrades?: Number;
  typeOfTrade?: String;
  startDate?: String;
  endDate?: String;
}

interface Trade {
  id: Number;
  ticker: string;
  number_of_shares: Number;
  short_or_long: string;
  buy_price: Number;
  sell_price: Number;
  short_price: Number;
  cover_price: Number;
  day_or_swing: string;
  start_date: string;
  end_date: string;
}

interface WindowSize {
  screenWidth: Number;
  screenHeight: Number;
}

export type { MyFormProps };
export type { AnalysisProps };
export type { Trade };
export type { WindowSize };
