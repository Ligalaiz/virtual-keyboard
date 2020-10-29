export function inputFromMouse(e, keyboard, input) {
  // console.log(input)
  if (e.target.classList.contains('keyboard__item')) {
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.classList.remove('active');
    });
    if (
      e.target.getAttribute('data') < 37 ||
      e.target.getAttribute('data') > 40
    ) {
      // console.log(input)
      input.focus();
      input.value +=
        e.target.textContent.length == 1 ? e.target.textContent : '';
      input.focus();
    }

    e.target.classList.add('active');
  }
}

export function removeMouseAnimation(e, keyboard) {
  if (e.target.classList.contains('keyboard__item')) {
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.classList.remove('active');
    });
  }
}