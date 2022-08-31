import "./App.css";
import { useEffect, useState } from "react";
import { Quotes } from "./pages/Quotes";
import { RandomQuote } from "./pages/RandomQuote";
import { Navigate, Route, Routes } from "react-router-dom";
export type AuthorType = {
  firstName: string
  lastName: string
  age: number
  image: string
}
export type QuoteType = {
  id: number;
  author: AuthorType
  quote: string;
};
function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [randomQuote, setRandomQuote] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/quotes")
      .then((rsp) => rsp.json())
      .then((qutesFromServer) => setQuotes(qutesFromServer));
    fetch("http://localhost:5000/random")
      .then((rsp) => rsp.json())
      .then((randomQuoteFromServer) => setRandomQuote(randomQuoteFromServer));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/quotes" />} />
        <Route path="quotes" element={<Quotes quotes={quotes} />} />
        <Route
          path="random"
          element={<RandomQuote randomQuote={randomQuote} />}
        />
      </Routes>
    </div>
  );
}

export default App;
