import React, {useCallback, useEffect, useState} from 'react';
import QuoteBody from "../../components/QuoteBody/QuoteBody";
import {Category, Quote, QuoteList} from "../../type";
import Sidebar from "../../components/Sidebar/Sidebar";
import axiosApi from "../../axiosApi";

interface Props {
  categories: Category[];
  setNameOfCat: (id: string) => void;
}

const Home: React.FC<Props> = ({categories, setNameOfCat}) => {

  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);

  const fetchAllQuotes = useCallback(async () => {
    try {
      const quotesResponse = await axiosApi.get<QuoteList>('/quotes.json');

      const quotes = Object.keys(quotesResponse.data).map(key => {
        const oneQuote = quotesResponse.data[key];
        oneQuote.id = key;
        return oneQuote;
      });
      setAllQuotes(quotes);

    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchAllQuotes().catch(console.error);
  }, [fetchAllQuotes]);

  const QuotesEl = allQuotes.map(quote => {
    return (
      <QuoteBody setQuotes={() => setAllQuotes(prevState => prevState.filter(item => item.id !== quote.id))}
                 quote={quote} key={quote.id} id={quote.id}/>
    )
  });

  return (
    <>
      <Sidebar setCategory={setNameOfCat} categories={categories}/>
      <div className="d-flex gap-2 flex-column col-8">
        {QuotesEl}
      </div>
    </>
  );
};

export default Home;