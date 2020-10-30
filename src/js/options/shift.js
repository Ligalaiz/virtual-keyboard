let isUpCaps = false;
let isUpShift = false;

export function shiftOn(e, keyboard, lang) {
  e.preventDefault();

  if (e.keyCode === 16 || e.target.getAttribute('data') == 16) {
    keyboard.querySelector(`div[data="16"]`).classList.add('shift--active');
    isUpShift = true;
  } else if (e.keyCode === 20 || e.target.getAttribute('data') == 20) {
    keyboard.querySelector(`div[data="20"]`).classList.add('caps--active');
    isUpCaps = true;
  }
  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
    if (el.textContent.length == 1) {
      if (isUpCaps && isUpShift) {
        el.textContent = el.textContent.toLowerCase();
      } else {
        el.textContent = el.textContent.toUpperCase();
      }
    }

    if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {
      lang.forEach((key) => {
        if (el.getAttribute('data') == key['num'] && key['signOn']) {
          el.textContent = key['signOn'];
        }
      });
    }
  });
}

export function shiftOff(e, keyboard, lang) {
  e.preventDefault();
  if (e.keyCode === 16 || e.target.getAttribute('data') == 16) {
    keyboard.querySelector(`div[data="16"]`).classList.remove('shift--active');
    isUpShift = false;
  } else if (e.keyCode === 20 || e.target.getAttribute('data') == 20) {
    keyboard.querySelector(`div[data="20"]`).classList.remove('caps--active');
    isUpCaps = false;
  }
  keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
    if (el.textContent.length == 1) {
      if (isUpCaps && isUpShift) {
        el.textContent = el.textContent.toUpperCase();
      } else if (isUpCaps || isUpShift) {
        el.textContent = el.textContent.toUpperCase();
      } else if (!isUpCaps && !isUpShift) {
        el.textContent = el.textContent.toLowerCase();
      }
    }

    if (e.keyCode == 16 || e.target.getAttribute('data') == 16) {
      lang.forEach((key) => {
        if (el.getAttribute('data') == key['num'] && key['signOn']) {
          el.textContent = key['sign'];
        }
      });
    }
  });
}
