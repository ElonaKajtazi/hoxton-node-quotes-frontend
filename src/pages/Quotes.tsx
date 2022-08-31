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
              src={quote.image}
              alt={quote.firstName}
            />
            <div className="author-info">
              <h2 className="quote">{quote.quote}</h2>
              <h3 className="author">
                ― {quote.firstName} {quote.lastName} (
                {quote.age})
              </h3>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/random">Random Quote</Link>
    </>
  );
}
