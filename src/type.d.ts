export interface Quote {
  author: string;
  category: string;
  text:string;
  id:string;
}

export type QuoteApi = Omit<Quote,'id'>;

export interface QuoteList {
  [id:string]:Quote;
}
