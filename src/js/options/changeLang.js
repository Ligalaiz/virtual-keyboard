let pressed = new Set();
export function changeLang(e, keyboard, languages, initKeys, ...codes) {
  let lang = languages[localStorage.getItem('lang')];
  pressed.add(e.code);
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
}

export function clearCache(e) {
  pressed.delete(e.code);
}
