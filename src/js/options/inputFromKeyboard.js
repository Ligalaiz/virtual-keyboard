export default function inputFromKeyboard(e, keyboard, myTextarea) {
  const { code } = e;
   keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
    if (
      el.dataset.code === code &&
      !el.dataset.code.match(
        /Backspace|Tab|Delete|CapsLock|Enter|ShiftLeft|ArrowUp|ShiftRight|ControlLeft|Win|AltLeft|Space|AltRight|ArrowLeft|ArrowDown|ArrowRight|ControlRight/
      )
    ) {
      let text = keyboard.querySelector(`div[data-code="${code}"]`).textContent;
      e.preventDefault();
      let startPos = myTextarea.selectionStart,
        endPos = myTextarea.selectionEnd,
        startValue = myTextarea.value.substring(0, startPos),
        endValue = myTextarea.value.substring(endPos, myTextarea.value.length);
      myTextarea.value = startValue + text + endValue;
      myTextarea.setSelectionRange(startPos + 1, startPos + 1);
    }
  });
}
