const CHOICES = document.querySelectorAll('.chosen');

function print(arg) {
  console.log(arg);
}

function toogle() {
  const drop = document.querySelector('.drop-chosen');
  if (drop.style.display === 'block') {
    // print(drop.style.display)
    drop.style.cssText = `display: none;
    height: 0;`
  } else {
    drop.style.cssText = `display: block;
    height: 210px;`
  }
}

CHOICES.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    toogle()
  })
})