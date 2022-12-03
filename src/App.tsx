import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AddQuote from "./containers/AddQuote/AddQuote";
import {Quote, QuoteList} from "./type";
import axiosApi from "./axiosApi";
import QuoteBody from "./components/QuoteBody/QuoteBody";
import Home from "./containers/Home/Home";

function App() {

  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);

  const fetchAllQuotes = useCallback(async () => {
    try {
      const quotesResponse = await axiosApi.get<QuoteList>('/quotes.json');

      const quotes = Object.keys(quotesResponse.data).map(key => {
        const oneQuote = quotesResponse.data[key];
        oneQuote.id = key;
        return oneQuote;
      });
      setAllQuotes(quotes);

    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchAllQuotes().catch(console.error);
  }, [fetchAllQuotes]);


  return (
    <div className="App d-flex flex-column gap-3">
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid row">
        <Routes>
          <Route path='/' element={(
            <Home allQuotes={allQuotes}/>
          )}/>
          <Route path='/add-quote' element={(
            <AddQuote/>
          )}/>
        </Routes>
      </main>
      <footer className="bg-dark py-3">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
