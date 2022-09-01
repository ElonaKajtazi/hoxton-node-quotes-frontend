import { Link } from "react-router-dom";
import { QuoteType } from "../App";
type Props = {
  quotes: QuoteType[];
};
export function Quotes({ quotes }: Props) {
  return (
    <>
      <h1>Famous Quotes</h1>
      <ul className="quotes">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-card">
            <img
              className="author-image"
              src={quote.author.image}
              alt={quote.author.image}
            />
            <div className="author-info">
              <h2 className="quote">{quote.text}</h2>
              <h3 className="author">
                ― {quote.author.firstName} {quote.author.lastName} (
                {quote.author.age})
              </h3>
            </div>
          </li>
        ))}
      </ul>
      {/* <Link to="/random">Random Quote</Link> */}
    </>
  );
}
