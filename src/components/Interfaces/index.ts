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

export type { Trade };
