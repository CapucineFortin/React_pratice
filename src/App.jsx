import { useState } from "react";
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [results, setResults] = useState([]);

  function computeHandler(inputs) {
    const data = calculateInvestmentResults(inputs);
    setResults(data);
  }

  return (
    <>
      <header>
        <Header />
      </header>
        <Calculator onCompute={computeHandler} />
        {results.length > 0 &&
          <Results results={results} />
        }
    </>
  )
}

export default App
