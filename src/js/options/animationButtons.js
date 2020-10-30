export function addAnimationButtons(e, keyboard) {
  keyboard.querySelector(`div[data="${e.keyCode}"]`).classList.add('active');
}

export function removeAnimationButtons(keyboard) {
  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
    el.classList.remove('active');
  });
}
