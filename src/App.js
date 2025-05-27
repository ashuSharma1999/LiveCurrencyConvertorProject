import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from './hooks/useCurrencyInfo';
import img from './images/currency.jpg'

const App = () => {
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const clear = () => {
    setAmount(0);
    setConvertedAmount(0);
  };

  return (
    <div style={styles.container}>
      {/* Left Section: Image */}
      <div style={styles.leftSection}>
        <img
          src={img}
          alt="Currency Exchange"

        />
      </div>

      {/* Right Section: Currency Conversion */}
      <div style={styles.rightSection}>
        <h2 style={styles.heading}>Currency Converter</h2>

        <InputBox
          label="From"
          onAmountChange={(amount) => setAmount(amount)}
          className="w-full outline-none"
          amount={amount}
          onChange={(e) => setAmount(e.target.value)}
          currenciesOption={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />

        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <button style={styles.button} onClick={swap}>
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          disable={true}
          className="w-full outline-none"
          amount={convertedAmount}
          currenciesOption={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button style={styles.button} onClick={convert}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          <button style={{ ...styles.button, backgroundColor: "red" }} onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    background: "#f4f4f4",
    padding: "20px",
  },
  leftSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  rightSection: {
    flex: 1,
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
};

export default App;
