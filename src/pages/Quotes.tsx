import { Link } from "react-router-dom";
import { QuoteType } from "../App";
type Props = {
  quotes: QuoteType[];
};
export function Quotes({ quotes }: Props) {
  return (
    <>
      <h1>Famous Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <h2>{quote.quote}</h2>
            <h3>― {quote.author}</h3>
          </li>
        ))}
      </ul>
      <Link to="/random">Random Quote</Link>
    </>
  );
}
