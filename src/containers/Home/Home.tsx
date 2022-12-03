import React from 'react';
import QuoteBody from "../../components/QuoteBody/QuoteBody";
import {Quote} from "../../type";
import Sidebar from "../../components/Sidebar/Sidebar";

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
      <Sidebar/>
      <div className="d-flex gap-2 flex-column col-8">
        {QuotesEl}
      </div>
    </>
  );
};

export default Home;