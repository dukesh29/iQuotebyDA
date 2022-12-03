import React from 'react';
import {useNavigate} from "react-router-dom";
import {QuoteApi} from "../../type";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";


const AddQuote= () => {

  const navigate = useNavigate();

  const createQuote = async (quote: QuoteApi) => {
    try {
      await axiosApi.post('/quotes.json', quote);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <QuoteForm onSubmit={createQuote}/>
    </div>
  );
};

export default AddQuote;