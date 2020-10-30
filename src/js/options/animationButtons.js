export function addAnimationButtons(e, keyboard) {
  if (e.code.match(/ShiftRight|ControlRight|AltRight/)) {
    keyboard
      .querySelector(`div[data-place="${e.code}"]`)
      .classList.add('active');
  } else if (!e.code.match(/ShiftRight|ControlRight|AltRight/)) {
    if (keyboard.querySelector(`div[data="${e.keyCode}"]`)) {
      keyboard
        .querySelector(`div[data="${e.keyCode}"]`)
        .classList.add('active');
    }
  }
}

export function removeAnimationButtons(keyboard) {
  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
    el.classList.remove('active');
  });
}
