import { useState } from "react";
import { toast } from "sonner";

function CurrencyConverter() {
  const [formData, setFormData] = useState({
    amount: "",
    fromCurrency: "MarkBucks",
    toCurrency: "UmerCoins",
  });

  const [result, setResult] = useState(null);

  // Creating unique currency exchange rates (relative to Mark Bucks)

  const customCurrencies = {
    MarkBucks: 1,
    UmerCoins: 5,
    KBarDinar: 0.002,
    CorgiCoin: 0.002,
    NeoCoin: 0.001,
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { amount, fromCurrency, toCurrency } = formData;

    if (!amount || isNaN(amount)) {
      return toast.error("Please enter a valid amount");
    }

    // Creating Currency Converter
    const fromCurrencyRate = customCurrencies[fromCurrency];
    const toCurrencyRate = customCurrencies[toCurrency];
    const convertedAmount =
      (parseFloat(amount) * toCurrencyRate) / fromCurrencyRate;

    setResult(convertedAmount.toFixed(3));
  };

  return (
    <div className="currency-conversion">
      <div className="title">
        <h1 className="title-text">Currency Converter</h1>
      </div>
      <div className="currency-converter">
        <form action="" onSubmit={handleSubmit} className="currency-form">
          <div className="input-amount">
            <label htmlFor="amount" className="amount-label">
              Amount:{" "}
            </label>
            <input
              type="number"
              id="amout"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
            />
          </div>

          <div className="input-from">
            <label htmlFor="fromCurrency" className="from-label">
              From:{" "}
            </label>
            <select
              id="fromCurrency"
              name="fromCurrency"
              value={formData.fromCurrency}
              onChange={handleInputChange}
            >
              {Object.keys(customCurrencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="input-to">
            <label htmlFor="fromCurrency" className="to-label">
              To:{" "}
            </label>
            <select
              id="toCurrency"
              name="toCurrency"
              value={formData.toCurrency}
              onChange={handleInputChange}
            >
              {Object.keys(customCurrencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Convert</button>
        </form>
        {result !== null && (
          <h2 className="converter-result">
            {formData.amount}
            {formData.fromCurrency} = {result} {formData.toCurrency}
          </h2>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
