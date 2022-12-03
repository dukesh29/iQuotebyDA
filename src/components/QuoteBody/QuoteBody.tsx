import React from 'react';
import {Quote} from "../../type";
import {Link, useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quote: Quote;
  id: string;
}

const QuoteBody: React.FC<Props> = ({quote, id}) => {

  const navigateOn = useNavigate();

  const deletePost = async () => {
    await axiosApi.delete('/quotes/' + id + '.json');
    navigateOn('/');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>{quote.category.toUpperCase()}</h4>
        <blockquote className="fs-4">"{quote.text}"</blockquote>
        <p> - {quote.author}</p>
        <div>
          <Link to={`/posts/${id}/edit`} className="btn btn-warning me-3">Edit</Link>
          <button className="btn btn-outline-danger" onClick={deletePost}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBody;