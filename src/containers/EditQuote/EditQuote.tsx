import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {QuoteApi} from "../../type";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";


const EditQuote = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [quote, setQuote] = useState<QuoteApi | null>(null);

  const fetchSelectedQuote = useCallback(async () => {
    try {
      const quoteResponse = await axiosApi.get<QuoteApi>("/quotes/" + id + '.json');
      setQuote(quoteResponse.data);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchSelectedQuote().catch(console.error);
    }
  }, [id, fetchSelectedQuote]);


  const updateQuote = async (quote: QuoteApi) => {
    await axiosApi.put('/quotes/' + id + '.json', quote);
    navigate('/');
  };

  return quote && (
    <div className="row mt-2">
      <div className="col">
        <QuoteForm onSubmit={updateQuote} existingQuote={quote}/>
      </div>
    </div>
  );
};

export default EditQuote;