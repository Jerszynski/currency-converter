{
  const calculateCurrency = (inputValue, currency) => {
    const usd = 4.43;
    const euro = 4.68;
    const gbp = 5.28;
    const chf = 4.73;

    switch (currency) {
      case "USD":
        return inputValue / usd;

      case "EURO":
        return inputValue / euro;

      case "GBP":
        return inputValue / gbp;

      case "CHF":
        return inputValue / chf;
    }
  };

  const resultElement = document.querySelector(".js-result");
  const clearForm = () => {
    resultElement.innerHTML = "N/A";
  };

  const updateResult = (result, inputValue, currency) => {
    resultElement.innerHTML = `${inputValue} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputElement = document.querySelector(".js-formInput");
    const curencyElement = document.querySelector(".js-formCurrency");

    const inputValue = +inputElement.value;
    const currency = curencyElement.value;

    const result = calculateCurrency(inputValue, currency);

    updateResult(result, inputValue, currency);
  };

  const init = () => {
    const clearButtonElement = document.querySelector(".js-reset");
    clearButtonElement.addEventListener("click", clearForm);

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
