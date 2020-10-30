export default function backspace(e, myTextarea) {
  if (e.target.getAttribute('data') == 8) {
    if (myTextarea.value.length > 0) {
      myTextarea.value = myTextarea.value.slice(0, myTextarea.value.length - 1);
    }
  }
}