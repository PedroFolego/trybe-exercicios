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

// document.getElementById('body').DatePickerX.init();

//   var picker = new Pikaday({
//     field: document.getElementById('datepicker'),
//     format: 'D MMM YYYY',
//     onSelect: function() {
//         console.log(this.getMoment().format('Do MMMM YYYY'));
//     }
// });

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
