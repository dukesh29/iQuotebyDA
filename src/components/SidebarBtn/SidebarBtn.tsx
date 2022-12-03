import React from 'react';
import {Link} from "react-router-dom";

interface Props{
  id:string;
  category:string
}

const SidebarBtn:React.FC <Props> = ({id,category}) => {
  return (
    <>
      <Link to={`/quotes/${id}`} className="fs-5 btn btn-light">{category}</Link>
    </>
  );
};

export default SidebarBtn;