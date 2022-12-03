import React from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {QuoteApi} from "../../type";

const AddQuote = () => {

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