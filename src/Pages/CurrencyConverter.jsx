import { useState } from "react";

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

    // Creating Currency Converter
    const fromCurrencyRate = customCurrencies[fromCurrency];
    const toCurrencyRate = customCurrencies[toCurrency];
    const convertedAmount = (amount * toCurrencyRate) / fromCurrencyRate;

    setResult(convertedAmount);
  };

  return (
    <div className="currency-conversion">
      <div className="title">
        <h1 className="title-text">Currency Converter</h1>
      </div>
      <div className="currency-converter">
        <form action="" className="currency-form"></form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
