const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch currency rate
function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/f8912b886389f6ad6fba6841/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const rate = data.conversion_rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});
