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
  S(`#select-marca-${veicle}`).value = event.target.innerText;
  modelVeicle(event.target.id, veicle);
}

// Criar lista de marcas de veículos
function addElement(obj, veicleInfo) {
  // print(S(`.results-for-chosen-${veicleInfo}`))
  // print(veicleInfo);
  obj.forEach((veicle) => {
    const li = elem('li');
    li.innerText = veicle.nome;
    li.className = 'chosen-model';
    li.id = veicle.codigo;
    S(`.results-for-chosen-${veicleInfo}`).appendChild(li);
  })
  addListener();
}