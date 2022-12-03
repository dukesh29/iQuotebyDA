import React from 'react';
import {Category} from "../../type";
import {Link} from "react-router-dom";
import SidebarBtn from "../SidebarBtn/SidebarBtn";

interface Props {
  categories: Category[];
  setCategory: (id: string) => void;
}

const Sidebar: React.FC<Props> = ({categories, setCategory}) => {

  const sidebarBtnsEl = categories.map(item => {
    return (
      <SidebarBtn setCategory={() => setCategory(item.id)} id={item.id} category={item.category} key={item.id}/>
    )
  });

  return (
    <div className=" col-4 d-flex flex-column gap-2">
      <Link to={'/'} className="fs-5 btn btn-secondary">All</Link>
      {sidebarBtnsEl}
    </div>
  );
};

export default Sidebar;