import React from 'react';

import Header from './components/Header/Header'
import ConversionForm from './components/ConversionForm/ConversionForm'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1>Currency Converter</h1>
        <ConversionForm />
      </div>
    </div>
  );
}

export default App;
