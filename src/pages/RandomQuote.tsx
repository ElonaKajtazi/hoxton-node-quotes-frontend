import { QuoteType } from "../App";

// type Props ={
//     randomQuote: QuoteType
// }
export function RandomQuote({ randomQuote }) {
  {
    if (randomQuote.length === 0) return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Random Quote</h1>
      <ul className="quotes">
        <li className="quote-card">
          <img
            className="author-image"
            src={randomQuote.image}
            alt={randomQuote.firstName}
          />
          <div className="author-info">
            <h2 className="quote">{randomQuote.quote}</h2>
            <h3 className="author">
              ― {randomQuote.firstName} {randomQuote.lastName} ({randomQuote.age})
            </h3>
          </div>
        </li>
      </ul>
    </>
  );
}
