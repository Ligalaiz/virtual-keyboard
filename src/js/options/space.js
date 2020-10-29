export default function space(e, input) {
  if (e.target.getAttribute('data') == 32) {
    e.preventDefault();
    if (input.value.length > 0) {
      input.value += ' ';
    }
  }
}