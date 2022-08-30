import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/quotes")
      .then((rsp) => rsp.json())
      .then((qutesFromServer) => setQuotes(qutesFromServer));
  }, []);
  return (
    <div className="App">
      <h1>Famous Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li>
            <h2>{quote.quote}</h2>
            <h3>{quote.author}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
