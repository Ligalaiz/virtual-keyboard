export default function initStructure(keyboard,keyboard__wrap, myTextarea, myList, message) {
  keyboard.className = 'keyboard';
  document.body.append(keyboard);

  keyboard__wrap.className = 'keyboard__wrap';
  document.querySelector('.keyboard').append(keyboard__wrap);
 
  document.querySelector('.keyboard__wrap').append(message);

  myTextarea.className = 'keyboard__input';
  myTextarea.setAttribute('autofocus', true);
  document.querySelector('.keyboard__wrap').append(myTextarea);

  myList.className = 'keyboard__list reset-list';
  document.querySelector('.keyboard__wrap').append(myList);
}