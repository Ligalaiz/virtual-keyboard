export default function enter(e, input) {
  if (e.target.getAttribute('data') == 13) {
    e.preventDefault();
    if (input.value.length > 0) {
      input.value += '\n';
    }
  }
}
