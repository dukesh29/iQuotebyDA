import React from 'react';
import QuoteBody from "../../components/QuoteBody/QuoteBody";
import {Quote} from "../../type";

interface Props {
  allQuotes: Quote[];
}

const Home: React.FC<Props> = ({allQuotes}) => {
  const QuotesEl = allQuotes.map(quote => {
    return (
      <QuoteBody quote={quote} key={quote.id} id={quote.id}/>
    )
  });
  return (
    <>
      {QuotesEl}
    </>
  );
};

export default Home;