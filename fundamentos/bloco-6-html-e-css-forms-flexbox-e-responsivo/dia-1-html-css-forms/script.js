const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']; 
const inputEstados = document.getElementById('estado');
const btnSave = document.getElementById('btnSave');
const nameUser = document.getElementById('name');
const main = document.getElementById('print');

for (let i = 0; i < estados.length; i += 1) {
  const estado = document.createElement('option');
  estado.innerText = estados[i];
  inputEstados.appendChild(estado);
}

btnSave.addEventListener('click', (e) => {
  e.preventDefault();
  main.innerHTML = nameUser.value;
})