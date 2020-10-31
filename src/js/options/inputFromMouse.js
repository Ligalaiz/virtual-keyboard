export default function inputFromMouse(e, keyboard, myTextarea) {
  if (e.target.classList.contains('keyboard__item')) {
    if (
      !e.target.dataset.code.match(
        /Backspace|Tab|Delete|CapsLock|Enter|ShiftLeft|ArrowUp|ShiftRight|ControlLeft|Win|AltLeft|Space|AltRight|ArrowLeft|ArrowDown|ArrowRight|ControlRight/
      )
    ) {
      let text = e.target.textContent;
      let startPos = myTextarea.selectionStart,
        endPos = myTextarea.selectionEnd,
        startValue = myTextarea.value.substring(0, startPos),
        endValue = myTextarea.value.substring(endPos, myTextarea.value.length);
      myTextarea.value = startValue + text + endValue;
      myTextarea.setSelectionRange(startPos + 1, startPos + 1);
    }
  }
}
