// utilitários
const S = (element) => document.querySelector(element);

function teste() {
  const arrTest = document.querySelectorAll('.chosen-model');
  arrTest.forEach((value) => {
    value.addEventListener('click', chosenMarcaCarro);
  })
}
teste()
function chosenMarcaCarro(event) {
  S('#select-marca-carro').value = event.target.innerText;
}