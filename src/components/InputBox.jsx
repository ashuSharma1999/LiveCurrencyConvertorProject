import React, { useId } from "react";
import PropTypes from "prop-types";



const InputBox = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = 'usd',
  onCurrencyChange,
  currenciesOption = [],
  style,
  disable
}) => {
  const amountInputId = useId()


  return (
    <div style={{ ...style, display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ flex: 1,margin:"10px" ,padding:"10px"}}>
        <label htmlFor={amountInputId}
          style={{ display: "block", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          disabled={disable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value) || 0)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontSize: "14px" }}
        >
          Currency Type
        </label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "white",
          }}
        >
          {currenciesOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Prop validation
InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

InputBox.defaultProps = {
  style: {},
};

export default InputBox;