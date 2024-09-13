import React, { useState } from 'react';

function RandomQuote() {
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default RandomQuote;
