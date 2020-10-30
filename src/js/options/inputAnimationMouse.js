export function inputFromMouse(e, keyboard, myTextarea) {
  if (e.target.classList.contains('keyboard__item')) {
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.classList.remove('active');
    });
    if (
      e.target.getAttribute('data') < 37 ||
      e.target.getAttribute('data') > 40
    ) {
      myTextarea.value +=
        e.target.textContent.length == 1 ? e.target.textContent : '';
    }
    e.target.classList.add('active');
  }
}
