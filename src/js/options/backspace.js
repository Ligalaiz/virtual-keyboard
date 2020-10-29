export default function backspace(e, input) {
  if (e.target.getAttribute('data') == 8) {
    if (input.value.length > 0) {
      input.value = input.value.slice(0, input.value.length - 1);
    }
  }
}