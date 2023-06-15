const API_KEY = "2BN9102D01KH1IN4"

async function getStockData() {
 const symbol = document.querySelector("#symbol").value;

 const response = await fetch( `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);

 const data = await response.json();
 console.log(data);
 const currentPrice = data["Global Quote"]["05. price"];
 const highPrice = data["Global Quote"]["03. high"];
 const lowPrice = data["Global Quote"]["04. low"];
 document.querySelector(
  "#current-price").innerText = `Current price: ${currentPrice}`;
 document.querySelector("#high-price").innerText = `high price: ${highPrice}`;
 document.querySelector("#low-price").innerText = `low price: ${lowPrice}`;
}

const fetchButton = document.querySelector("#fetchButton");
fetchButton.addEventListener("click", getStockData);