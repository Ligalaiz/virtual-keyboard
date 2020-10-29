export default function del(e, input) {
  if (e.target.getAttribute('data') == 46) {
    if (input.selectionStart == input.selectionEnd) {
      input.setRangeText(
        '',
        input.selectionStart,
        input.selectionEnd + 1,
        'end'
      );
    } else if (input.selectionStart != input.selectionEnd) {
      input.setRangeText('', input.selectionStart, input.selectionEnd, 'end');
    }
  }
}