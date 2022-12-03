import React, {useState} from 'react';
import SidebarBtn from "../SidebarBtn/SidebarBtn";

const Sidebar = () => {

  const category = [
    {category: 'Звездные войны', id: 'звездные-войны'},
    {category: 'Мстители', id: 'мстители'},
    {category: 'DC', id: 'dc'},
    {category: 'Форсаж', id: 'форсаж'},
    {category: 'Шурик', id: 'шурик'},
  ];

  const sidebarBtnsEl = category.map(item => {
    return (
      <SidebarBtn id={item.id} category={item.category} key={item.id}/>
    )
  });

  return (
    <div className=" col-4 d-flex flex-column gap-2">
      {sidebarBtnsEl}
    </div>
  );
};

export default Sidebar;