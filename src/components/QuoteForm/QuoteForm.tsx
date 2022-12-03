import React, {useState} from 'react';
import {QuoteApi} from "../../type";

interface Props {
  existingQuote?: QuoteApi;
  onSubmit: (quote: QuoteApi) => void;
}

const PostForm: React.FC<Props> = ({existingQuote, onSubmit}) => {


  const initialState = existingQuote ? {
    ...existingQuote,
  } : {
    author: '',
    category: '',
    text: '',
  };

  const [quote, setQuote] = useState<QuoteApi>(initialState);

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setQuote(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...quote,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="mt-2">{existingQuote ? 'Edit quote' : 'Add new quote'}</h4>
      <div className="form-group my-2">
        <label htmlFor="category" className="pb-1 fs-6 fw-bold">Category</label>
        <select name="category" id="category" className="form-select w-25" onChange={onQuoteChange}>
          <option value="" selected disabled></option>
          <option value="мстители">Мстители</option>
          <option value="звездные-войны">Звездные Войны</option>
          <option value="dc">DC</option>
          <option value="шурик">Шурик</option>
          <option value="форсаж">Форсаж</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="author" className="pb-1 fs-6 fw-bold">Автор</label>
        <input
          type="text"
          id="author"
          name="author"
          className="form-control w-50"
          value={quote.author}
          onChange={onQuoteChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text" className="pb-1 fs-6 fw-bold">Quote text</label>
        <textarea
          id="text"
          name="text"
          className="form-control w-50"
          value={quote.text}
          onChange={onQuoteChange}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">{existingQuote ? 'Save' : 'Create'}</button>
    </form>
  );
};

export default PostForm;