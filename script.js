const VEICLE = {};
// utilitários
const S = (element) => document.querySelector(element);
const elem = (element) => document.createElement(element);

// addListener()
function addListener(seletor) {
  const arrTest = document.querySelectorAll(seletor);
  arrTest.forEach((value) => {
    value.addEventListener('click', chosenMarveicle);
  });
}

function infoVeicle(veicleType, codeVeicle, modelVeicle, yearVeicle) {
  VEICLE.veicleType = veicleType;
  VEICLE.codeVeicle = codeVeicle;
  VEICLE.modelVeicle = modelVeicle;
  VEICLE.yearVeicle = yearVeicle;
  print(VEICLE);
}

function chosenMarveicle(event) {
  const classVeicleList = event.target.parentElement.className;
  const veicle = classVeicleList.split('-').pop();
  // print(actualVeicle);
  const inputSelected = event.target.
    parentElement.parentElement.parentElement
    .previousElementSibling.firstElementChild;

  // print(inputSelected);
  if (inputSelected.id === `select-marca-${veicle}`) {
    inputSelected.value = event.target.innerText;
    modelVeicle(event.target.id, veicle);
  }

  if (inputSelected.id === `select-model-${veicle}`) {
    inputSelected.value = event.target.innerText;
    const marcaVeicle = event.target.parentElement.id;
    yearVeicle(event.target.id, veicle, marcaVeicle);
  }

  if (inputSelected.id === `select-year-${veicle}`) {
    inputSelected.value = event.target.innerText;
    const codeVeicle = S(`.results-for-chosen-model-${veicle}`).id;
    const modelVeicle = S(`.results-for-chosen-year-${veicle}`).id;
    const yearVeicle = event.target.id;
    infoVeicle(veicle, codeVeicle, modelVeicle, yearVeicle);
  }
}

// Criar lista de veículos
function addElement(arr, veicleClass, codeVeicle) {
  const ul = S(`.results-for-chosen-${veicleClass}`);
  ul.innerHTML = '';
  if (codeVeicle) ul.id = codeVeicle;

  arr.forEach((veicle) => {
    const li = elem('li');
    li.innerText = veicle.nome;
    li.className = 'chosen-model';
    li.id = veicle.codigo;
    ul.appendChild(li);
  })
  addListener('.chosen-model');
}

function resultTable(obj, btn) {
  const categoryContainer = btn.parentElement.parentElement;
  let section = S('.result');

  if (section) {
    section.remove();
  } {
    section = elem('section')
    section.className = 'result';
  }
  const table = elem('table');
  const tbody = elem('tbody');
  const a = elem('a');
  a.href = '#';
  a.id = 'result';
  a.innerText = 'Resultado';

  const arr = Object.entries(obj)
  arr.pop();
  arr.pop();
  arr.forEach((value) => {
    const td1 = elem('td');
    const td2 = elem('td');
    td1.innerText = value[0];
    td2.innerText = value[1];

    const tr = elem('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
    table.appendChild(tbody);
  });

  section.appendChild(a);
  section.appendChild(table);
  // categoryContainer.style.height = '900px';
  categoryContainer.appendChild(section);

  removeDropActiveChosens(false, 'droped');
  window.location.href = '#result';
}

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
  btn.addEventListener('click', tablePrice);
});