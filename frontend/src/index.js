import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Block1 from './components/Block1';
import reportWebVitals from './reportWebVitals';
import Block2 from './components/Block2'
import Block3 from './components/Block3'
import Header from './components/Header';
import BusinessCard from './components/Block7';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Block1/>
    <main className="main-content">
      <Block1 />
      <Block2 />
      <BusinessCard />
    </main>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
