import React from 'react';
import {Quote} from "../../type";
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quote: Quote;
  id: string;
  setQuotes: (id:string) => void;
}

const QuoteBody: React.FC<Props> = ({quote, id, setQuotes}) => {

  const deletePost = async () => {
    await axiosApi.delete('/quotes/' + id + '.json');
      setQuotes(id);
  };

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div className="px-4">
          <blockquote className="fs-4">"{quote.text}"</blockquote>
          <p className="fs-5"> - {quote.author}</p>
        </div>
        <div className="btn-div">
          <Link to={`/quotes/${id}/edit`} className="btn btn-warning me-3">Edit</Link>
          <button className="btn btn-danger" onClick={deletePost}>X</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBody;