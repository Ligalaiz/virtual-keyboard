export default function enter(e, myTextarea) {
  if (e.target.getAttribute('data') == 13) {
    let startPos = myTextarea.selectionStart,
      endPos = myTextarea.selectionEnd,
      startValue = myTextarea.value.substring(0, startPos),
      endValue = myTextarea.value.substring(endPos, myTextarea.value.length);
    myTextarea.value = startValue + '\n' + endValue;
    myTextarea.setSelectionRange(startPos + 1, startPos + 1);
  }
}
