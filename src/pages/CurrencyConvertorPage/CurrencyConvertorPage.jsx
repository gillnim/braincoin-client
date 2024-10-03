import { useState } from "react";
import { toast } from "sonner"; 
function CurrencyConverter() {
  const [formData, setFormData] = useState({
    amount: "",
    fromCurrency: "MarkBucks", // Initial currency
    toCurrency: "UmerCoins",   // Target currency
  });
  const [result, setResult] = useState(null);
  // Updated currency exchange rates (relative to MarkBucks)
  const customCurrencies = {
    MarkBucks: 1,              // Base currency (e.g., 1 MarkBucks = 1)
    UmerCoins: 5,              // 1 MarkBucks = 5 UmerCoins
    KBarDinar: 0.002,          // 1 MarkBucks = 0.002 KBarDinar
    CorgiCoin: 0.002,          // 1 MarkBucks = 0.002 CorgiCoin
    NeoCoin: 0.001,            // 1 MarkBucks = 0.001 NeoCoin
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
    // Validate amount to ensure it's a number
    if (!amount || isNaN(amount)) {
      return toast.error("Please enter a valid amount");
    }
    // Conversion logic using the custom currency rates
    const fromCurrencyRate = customCurrencies[fromCurrency];
    const toCurrencyRate = customCurrencies[toCurrency];
    const convertedAmount =
      (parseFloat(amount) * toCurrencyRate) / fromCurrencyRate;
    setResult(convertedAmount.toFixed(3)); // Convert to 3 decimal places
  };
  return (
    <div className="currency-conversion">
      <div className="title">
        <h1 className="title-text">Currency Converter</h1>
      </div>
      <div className="currency-converter">
        {/* Currency Conversion Form */}
        <form action="" onSubmit={handleSubmit} className="currency-form">
          {/* Input for Amount */}
          <div className="input-amount">
            <label htmlFor="amount" className="amount-label">
              Amount:{" "}
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              min="0" // Optionally set minimum to prevent negatives
            />
          </div>
          {/* Dropdown for 'From' Currency */}
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
          {/* Dropdown for 'To' Currency */}
          <div className="input-to">
            <label htmlFor="toCurrency" className="to-label">
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
          {/* Submit Button */}
          <button type="submit" className="convert-button">
            Convert
          </button>
        </form>
        {/* Display the conversion result */}
        {result !== null && (
          <h2 className="converter-result">
            {formData.amount} {formData.fromCurrency} = {result}{" "}
            {formData.toCurrency}
          </h2>
        )}
      </div>
    </div>
  );
}
export default CurrencyConverter;