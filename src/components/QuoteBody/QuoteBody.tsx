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
      <div className="card-body d-flex justify-content-between">
      <div>
        <h4>{quote.category.toUpperCase()}</h4>
        <blockquote className="fs-4">"{quote.text}"</blockquote>
        <p className="fs-5"> - {quote.author}</p>
      </div>
        <div className= "btn-div">
          <Link to={`/posts/${id}/edit`} className="btn btn-light me-3">Edit</Link>
          <button className="btn btn-outline-danger" onClick={deletePost}>X</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBody;