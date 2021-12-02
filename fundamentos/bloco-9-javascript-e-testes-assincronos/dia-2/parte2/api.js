function append(data) {
  const ol = document.querySelector('#order');

  const li = document.createElement('li');
  li.innerHTML = data;
  ol.appendChild(li);
}

async function fetchCripto() {
  const coins = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data => data.data))
    .catch((erro) => erro.toString());
  return coins;
}


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

// async function listCript() {
//   const coin = await fetchCripto();
//   for (let i = 0; i < 10; i++) {
//     append(`${coin[i].name}: ${formatter.format(coin[i].priceUsd)}`); 
//   }
// }

async function listCript2() {
  const coins = await fetchCripto();
  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin10) => append(`${coin10.name}: ${formatter.format(coin10.priceUsd)}`));
}
window.onload = () => listCript2();
