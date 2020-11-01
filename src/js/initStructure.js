export default function initStructure(
  keyboard,
  keyboard__wrap,
  myTextarea,
  myList,
  optionBtn,
  changeLangBtn,
  enBtn,
  ruBtn,
  soundBtn,
  voiceBtn,
  hideBtn
) {
  keyboard.className = 'keyboard';
  document.body.append(keyboard);

  keyboard__wrap.className = 'keyboard__wrap';
  document.querySelector('.keyboard').append(keyboard__wrap);

  myTextarea.className = 'keyboard__input';
  myTextarea.setAttribute('autofocus', true);
  myTextarea.setAttribute('placeholder', 'Click here');
  document.querySelector('.keyboard__wrap').append(myTextarea);

  myList.className = 'keyboard__list reset-list';
  document.querySelector('.keyboard__wrap').append(myList);

  optionBtn.className = 'option-btn__wrap';
  document.querySelector('.keyboard__input').after(optionBtn);

  changeLangBtn.className = 'option-btn__item option-btn__item--changeLang';
  changeLangBtn.setAttribute('data-code', 'lang');
  document.querySelector('.option-btn__wrap').append(changeLangBtn);

  enBtn.className = 'lang__item lang__item--en';
  document.querySelector('.option-btn__item--changeLang').append(enBtn);

  ruBtn.className = 'lang__item lang__item--ru';
  document.querySelector('.option-btn__item--changeLang').append(ruBtn);

  soundBtn.className = 'option-btn__item option-btn__item--sound';
  soundBtn.setAttribute('data-code', 'sound');
  document.querySelector('.option-btn__wrap').append(soundBtn);

  voiceBtn.className = 'option-btn__item option-btn__item--voice';
  voiceBtn.setAttribute('data-code', 'voice');
  document.querySelector('.option-btn__wrap').append(voiceBtn);

  hideBtn.className = 'option-btn__item option-btn__item--hide';
  hideBtn.setAttribute('data-code', 'hide');
  document.querySelector('.option-btn__wrap').append(hideBtn);
}
