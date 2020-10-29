export function capsOn(e, keyboard, lang) {
  if (e.keyCode == 20 || e.target.getAttribute('data') == 20) {
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

export function capsOff(e, keyboard, lang) {
  if (e.keyCode == 20 || e.target.getAttribute('data') == 20) {
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