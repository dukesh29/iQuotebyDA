import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  id: string;
  category: string;
  setCategory: React.MouseEventHandler;
}

const SidebarBtn: React.FC<Props> = ({id, category, setCategory}) => {

  return (
    <>
      <Link to={`/quotes/${id}`} className="fs-5 btn btn-secondary" onClick={setCategory}>{category}</Link>
    </>
  );
};

export default SidebarBtn;