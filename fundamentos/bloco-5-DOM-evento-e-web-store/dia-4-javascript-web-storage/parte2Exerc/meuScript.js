
let changesSave = {
  backColor: '',
  wordColor: '',
  fontSize: '',
  lineHeight: '',
  fontFamily: ''
}

let catchButton = document.getElementById('btn');

function alterarSite() {

  catchButton.addEventListener('click', function () {

    changesSave.backColor = document.getElementById('backgroundColor').value;
    changesSave.wordColor = document.getElementById('textColor').value;
    changesSave.fontSize = document.getElementById('fontSize').value;
    changesSave.lineHeight = document.getElementById('lineHeight').value;
    changesSave.fontFamily = document.getElementById('fontFamily').value;

    localStorage.setItem('config', JSON.stringify(changesSave));
    backUp(changesSave);
  })

}
alterarSite();

let catchBody = document.getElementsByTagName('body')[0];

function backUp(dados) {
  catchBody.style.backgroundColor = dados.backColor;
  catchBody.style.color = dados.wordColor;
  catchBody.style.fontSize = dados.fontSize;
  catchBody.style.lineHeight = dados.lineHeight;
  catchBody.style.fontFamily = dados.fontFamily;
}


window.onload = function() {
function returnSaveData() {

  let objeto = JSON.parse(localStorage['config']);
  backUp(objeto);

}
returnSaveData();
}

