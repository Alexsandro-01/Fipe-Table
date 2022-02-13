// utilitários
const S = (element) => document.querySelector(element);
const elem = (element) => document.createElement(element);

function addListener() {
  const arrTest = document.querySelectorAll('.chosen-model');
  arrTest.forEach((value) => {
    value.addEventListener('click', chosenMarveicle);
  });
}
// addListener()

function chosenMarveicle(event) {
  const classVeicleList = event.target.parentElement.className;
  const veicle = classVeicleList.split('-').pop();
  // print(actualVeicle);
  const inputSelected = event.target.
    parentElement.parentElement.parentElement
    .previousElementSibling.firstElementChild;

  // print(inputSelected);
  inputSelected.value = event.target.innerText;
  modelVeicle(event.target.id, veicle);
}

// Criar lista de marcas de veículos
function addElement(arr, veicleInfo) {
  const ul = S(`.results-for-chosen-${veicleInfo}`);
  ul.innerHtml = '';
  arr.forEach((veicle) => {
    const li = elem('li');
    li.innerText = veicle.nome;
    li.className = 'chosen-model';
    li.id = veicle.codigo;
    ul.appendChild(li);
  })
  addListener();
}