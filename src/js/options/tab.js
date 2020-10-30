export function tabBtn(e, input) {
  if (e.keyCode == 9) {
    e.preventDefault();
    if (input.value.length > 0) {
      input.value += '  ';
    }
  }
}
export function tabMouse(e, input) {
  if (e.target.getAttribute('data') == 9) {
    e.preventDefault();
    if (input.value.length > 0) {
      input.value += ' ';
    }
  }
}