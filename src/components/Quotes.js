import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuotes = dataQuotes[randomNum];
        setQuote(randomQuotes.quote);
        setAuthor(randomQuotes.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div id="quote-box">
      <div id="text">
        <p>{quote}</p>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a href="https://twitter.com/therufusdrew" id="twet-quote">
            <span>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                alt=""
              />
            </span>
          </a>
          <a href="https://www.facebook.com/rufusdrew" id="tumlr-quote">
            <span>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
                alt=""
              />
            </span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">
          New quote
        </button>
      </div>
      <div id="text2">
        <p>Developed By Rufus drew</p>
      </div>
    </div>
  );
};

export default Quotes;
