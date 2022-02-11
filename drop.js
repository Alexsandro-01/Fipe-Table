const CHOICES = document.querySelectorAll('.chosen');
const CATEGORYS = document.querySelectorAll('.category-drop');

function print(arg) {
  console.log(arg);
}

// Drop veicle type
CATEGORYS.forEach((category) => {
  category.addEventListener('click', () => {
    const section = category.parentElement.parentElement;
    section.lastElementChild.classList.toggle('search-droped')
  })
})

// Drop choices veicles
CHOICES.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const drop = e.target.parentElement.nextElementSibling;
    drop.classList.toggle('droped');
    print()
  })
})