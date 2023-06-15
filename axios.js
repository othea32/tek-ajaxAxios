const API_KEY = "2BN9102D01KH1IN4"

// Adding a request interceptor
axios.interceptors.request.use((request) => {
 console.log("Starting Request", request);
 return request;
});

// Adding a response interceptor
axios.interceptors.response.use((response) => {
 console.log("Response:", response);
 return response;
});

async function getStockData() {
 const symbol = document.querySelector("#symbol").value;
 try {
   const response = await axios.get(
     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
   );

   const data = response.data;
   console.log(data);
   const currentPrice = data["Global Quote"]["05. price"];
   const highPrice = data["Global Quote"]["03. high"];
   const lowPrice = data["Global Quote"]["04. low"];
   document.querySelector(
     "#current-price"
   ).innerText = `Current price: ${currentPrice}`;
   document.querySelector(
     "#high-price"
   ).innerText = `high price: ${highPrice}`;
   document.querySelector("#low-price").innerText = `low price: ${lowPrice}`;
 } catch (error) {
   console.error(error);
 }
}

const fetchButton = document.querySelector("#fetchButton");
fetchButton.addEventListener("click", getStockData);