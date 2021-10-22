function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();



function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulListDays = document.getElementById('days');

  for (let day of dezDaysList) {
    let listDays = document.createElement('li');
    listDays.innerHTML = day;
    listDays.classList.add('day');
    if (day === 24 || day === 31) {
      listDays.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18) {
      listDays.classList.add('friday');
    }
    if (day === 25) {
      listDays.classList.add('friday');
      listDays.classList.add('holiday');
    }
    ulListDays.appendChild(listDays);
  }

}
createDays();

function buttonHoliday() {
  const button = document.createElement('button');
  button.innerHTML = 'Feriados';
  const classBtn = document.getElementsByClassName('buttons-container')[0];
  classBtn.appendChild(button);


  button.addEventListener('click', function (event) {
    const holidays = document.querySelectorAll('.holiday');
    if (holidays[0].style.background !== 'yellow') {
      for (let day of holidays) {
        day.style.background = 'yellow';
      }
    } else {
      for (let day of holidays) {
        day.style.background = 'rgb(238,238,238)';
      }
    }
  })
}
buttonHoliday();

function buttonFriday() {

  const button = document.createElement('button');
  button.innerHTML = 'Sexta-Feira';
  button.setAttribute('id', 'btn-friday');
  const classBtn = document.getElementsByClassName('buttons-container')[0];
  classBtn.appendChild(button);


  button.addEventListener('click', function () {
    const friday = document.getElementsByClassName('friday');
    if (friday[0].innerText == 4) {
      for (day of friday) {
        day.innerText = 'Dia de maldade';
      }
    } else {
      friday[0].innerText = 4;
      friday[1].innerText = 11;
      friday[2].innerText = 18;
      friday[3].innerText = 25;
    }
  })
}
buttonFriday();

function zoomDay() {
  const daysLi = document.getElementsByClassName('day');
  for( let day of daysLi) {
    day.addEventListener('mouseover', function() {
      day.style.fontSize = '30px';
    })
  }
  for( let day of daysLi) {
    day.addEventListener('mouseout', function() {
      day.style.fontSize = '20px';
    })
}
}
zoomDay();

const daysLi = document.getElementsByClassName('day');



// Escreva seu código abaixo.

console.log(daysLi);