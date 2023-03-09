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

  const updateResult = (result, inputValue, currency) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerHTML = `${inputValue} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputElement = document.querySelector(".js-formInput");
    const CurencyElement = document.querySelector(".js-formCurrency");

    const inputValue = +inputElement.value;
    const currency = CurencyElement.value;

    const result = calculateCurrency(inputValue, currency);

    updateResult(result, inputValue, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
