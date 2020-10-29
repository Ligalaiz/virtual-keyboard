export default function changeLang(keyboard, lang, languages, initKeys,...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.remove();
    });

    localStorage.getItem('lang') == 'en'
      ? localStorage.setItem('lang', 'ru')
      : localStorage.setItem('lang', 'en');
    lang = languages[localStorage.getItem('lang')];
    initKeys(lang);
    pressed.clear();
  });
  document.addEventListener('keyup', function (event) {
    pressed.delete(event.code);
  });
}
