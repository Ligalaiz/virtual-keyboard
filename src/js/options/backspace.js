export default function backspace(e, myTextarea) {
  if (e.target.getAttribute('data') == 8) {
    let startPos = myTextarea.selectionStart,
      endPos = myTextarea.selectionEnd;
    if (myTextarea.selectionStart) {
      if (myTextarea.selectionStart == myTextarea.selectionEnd) {
        myTextarea.value =
          myTextarea.value.substring(0, startPos - 1) +
          myTextarea.value.substring(endPos, myTextarea.value.length);
        myTextarea.setSelectionRange(startPos - 1, startPos - 1);
      } else {
        myTextarea.value =
          myTextarea.value.substring(0, startPos) +
          myTextarea.value.substring(endPos, myTextarea.value.length);
        myTextarea.setSelectionRange(startPos, startPos);
      }
    }
  }
}
