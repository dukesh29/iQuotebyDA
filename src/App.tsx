import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AddQuote from "./containers/AddQuote/AddQuote";
import Home from "./containers/Home/Home";
import EditQuote from "./containers/EditQuote/EditQuote";
import CategoryBody from "./containers/CategoryBody/CategoryBody";
import './App.css';

function App() {

  const categories = [
    {category: 'Звездные войны', id: 'звездные-войны'},
    {category: 'Мстители', id: 'мстители'},
    {category: 'DC', id: 'dc'},
    {category: 'Форсаж', id: 'форсаж'},
    {category: 'Шурик', id: 'шурик'},
  ];

  const [nameOfCategory, setNameOfCategory] = useState('');

  return (
    <div className="App d-flex flex-column gap-3">
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid row">
        <Routes>
          <Route path='/' element={(
            <Home setNameOfCat={setNameOfCategory} categories={categories}/>
          )}/>
          <Route path='/add-quote' element={(
            <AddQuote/>
          )}/>
          <Route path='/quotes/:id/edit' element={(
            <EditQuote/>
          )}/>
          <Route path='/quotes/:category' element={(
            <CategoryBody categories={categories} setNameOfCat={setNameOfCategory}
                          nameOfCategory={nameOfCategory}/>
          )}/>
        </Routes>
      </main>
      <footer className="bg-warning py-3">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
