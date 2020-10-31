let isUpCaps = false;
let isUpShift = false;

export function shiftOn(e, keyboard, lang) {
  const { code, keyCode } = e;
  e.preventDefault();
  if (keyCode === 16 || e.target.getAttribute('data') == 16) {
      if (keyCode) {
      keyboard
        .querySelector(`div[data-code="${code}"]`)
        .classList.add('shift--active');
    } else {
      let place = e.target.getAttribute('data-code');
      keyboard
        .querySelector(`div[data-code="${place}"]`)
        .classList.add('shift--active');
    }

    isUpShift = true;
  } else if (keyCode === 20 || e.target.getAttribute('data') == 20) {
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

    if (keyCode == 16 || e.target.getAttribute('data') == 16) {
      lang.forEach((key) => {
        if (el.getAttribute('data') == key['num'] && key['signOn']) {
          el.textContent = key['signOn'];
        }
      });
    }
  });
}

export function shiftOff(e, keyboard, lang) {
  const { code, keyCode } = e;
  e.preventDefault();
  if (keyCode === 16 || e.target.getAttribute('data') == 16) {
    if (keyCode) {
      keyboard
        .querySelector(`div[data-code="${code}"]`)
        .classList.remove('shift--active');
    } else {
      let place = e.target.getAttribute('data-code');
      keyboard
        .querySelector(`div[data-code="${place}"]`)
        .classList.remove('shift--active');
    }

    isUpShift = false;
  } else if (keyCode === 20 || e.target.getAttribute('data') == 20) {
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
