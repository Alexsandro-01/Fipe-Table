const CHOICES = document.querySelectorAll('.chosen');
const DROP_CHOSEN = document.querySelectorAll('.drop-chosen');
const CATEGORYS_BTN = document.querySelectorAll('.category-drop');
const CATEGORYS = document.querySelectorAll('.category');

function print(...arg) {
  console.log(...arg);
}

function removeDropActive(arrElem, excession, classElem) {
  arrElem.forEach((elem) => {
    if (elem.lastElementChild !== excession) {
      elem.lastElementChild.classList.remove(classElem);
    }
    // print(category.classList)
  })
}

// Drop veicle type
CATEGORYS_BTN.forEach((categoryBtn) => {
  categoryBtn.addEventListener('click', (event) => {
    const veicle = event.target.parentElement.parentElement.id;
    const section = categoryBtn.parentElement.parentElement;
    section.lastElementChild.classList.contains('search-droped') ? false : baseUrl(veicle);
    
    removeDropActive(CATEGORYS, section.lastElementChild, 'search-droped');
    section.lastElementChild.classList.toggle('search-droped')
  })
})

// Drop choices veicles
function removeDropActiveChosens(excession, classElem) {
  DROP_CHOSEN.forEach((chosen) => {
    if (chosen !== excession) {
      chosen.classList.remove(classElem)
    }
  })
}

CHOICES.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const drop = e.target.parentElement.nextElementSibling;
    removeDropActiveChosens(drop, 'droped');
    drop.classList.toggle('droped');
    // print()
  })
})