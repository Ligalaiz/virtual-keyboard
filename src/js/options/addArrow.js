export function addArrowLeft(myTextarea) {
  let startPos = myTextarea.selectionStart;
  myTextarea.focus();
  myTextarea.setSelectionRange(startPos - 1, startPos - 1);
}

export function addArrowRight(myTextarea) {
  let startPos = myTextarea.selectionStart;
  myTextarea.focus();
  myTextarea.setSelectionRange(startPos + 1, startPos + 1);
}
