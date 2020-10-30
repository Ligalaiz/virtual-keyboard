export function tabBtn(e, myTextarea) {
  if (e.keyCode == 9 || e.target.getAttribute('data') == 9){
    e.preventDefault();
    let startPos = myTextarea.selectionStart,
    endPos = myTextarea.selectionEnd,
    startValue = myTextarea.value.substring(0, startPos),
    endValue = myTextarea.value.substring(endPos, myTextarea.value.length);
    myTextarea.value = startValue + '  ' + endValue;
    myTextarea.setSelectionRange(startPos + 2, startPos + 2); 
  }
}
