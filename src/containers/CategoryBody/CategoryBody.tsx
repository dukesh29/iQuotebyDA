import React, {useCallback, useEffect, useState} from 'react';
import {Category, Quote, QuoteList} from "../../type";
import axiosApi from "../../axiosApi";
import QuoteBody from "../../components/QuoteBody/QuoteBody";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {
  nameOfCategory: string;
  categories: Category[];
  setNameOfCat: (id: string) => void;
}

const CategoryBody: React.FC<Props> = ({nameOfCategory, categories, setNameOfCat}) => {

  const [quotesByCat, setQuotesByCat] = useState<Quote[]>([]);

  const fetchQuotesByCat = useCallback(async () => {
    try {
      const quotesResponse = await axiosApi.get<QuoteList>(`/quotes/.json?orderBy="category"&equalTo="${nameOfCategory}"`);

      const quotes = Object.keys(quotesResponse.data).map(key => {
        const oneQuote = quotesResponse.data[key];
        oneQuote.id = key;
        return oneQuote;
      });
      setQuotesByCat(quotes);

    } catch (e) {
      console.error(e);
    }
  }, [nameOfCategory]);


  useEffect(() => {
    fetchQuotesByCat().catch(console.error);
  }, [nameOfCategory, fetchQuotesByCat]);


  const quotesByCategory = quotesByCat.map(quote => {
    return (
      <QuoteBody setQuotes={()=>setQuotesByCat(prevState => prevState.filter(item => item.id !== quote.id))}
                 quote={quote} id={quote.id} key={quote.id}/>
    )
  });

  return (
    <div className="row">
      <Sidebar setCategory={setNameOfCat} categories={categories}/>
      <div className="d-flex gap-2 flex-column col-8">
        <h3 className="text-center">{nameOfCategory.toUpperCase()}</h3>
        {quotesByCategory}
      </div>
    </div>
  );
};

export default CategoryBody;