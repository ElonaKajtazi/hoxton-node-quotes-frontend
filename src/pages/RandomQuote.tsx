import { QuoteType } from "../App";

// type Props ={
//     randomQuote: QuoteType
// }
export function RandomQuote({randomQuote}) {
  return (
    <div>
      <h1>Random Quote:</h1>
      <h2>{randomQuote.quote}</h2>
      <h3>― {randomQuote.author}</h3>
    </div>
  );
}
