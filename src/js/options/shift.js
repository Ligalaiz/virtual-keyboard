export function shiftOn(e, keyboard, lang) {
  if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {
    e.preventDefault();
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.textContent =
        el.textContent.length == 1
          ? el.textContent.toUpperCase()
          : el.textContent;

      lang.forEach((key) => {
        if (el.getAttribute('data') == key['num'] && key['signOn']) {
          el.textContent = key['signOn'];
        }
      });
    });
  }
}

export function shiftOff(e, keyboard, lang) {
  if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {
    e.preventDefault();
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.textContent =
        el.textContent.length == 1
          ? el.textContent.toLowerCase()
          : el.textContent;
      lang.forEach((key) => {
        if (el.getAttribute('data') == key['num'] && key['signOn']) {
          el.textContent = key['sign'];
        }
      });
    });
  }
}