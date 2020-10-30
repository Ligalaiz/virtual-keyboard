export default function del(e, myTextarea) {
  if (e.target.getAttribute('data') == 46) {
    if (myTextarea.selectionStart == myTextarea.selectionEnd) {
      myTextarea.setRangeText(
        '',
        myTextarea.selectionStart,
        myTextarea.selectionEnd + 1,
        'end'
      );
    } else if (myTextarea.selectionStart != myTextarea.selectionEnd) {
      myTextarea.setRangeText('', myTextarea.selectionStart, myTextarea.selectionEnd, 'end');
    }
  }
}