export default function changeLang(e, keyboard, languages, initKeys) {
  let isRu = localStorage.getItem('lang') === 'ru' ? true : false;
  if (!e.target.closest('div[data-code]')) return;
  if (e.target.closest('div[data-code]').dataset.code === 'lang') {
    keyboard.querySelectorAll('.keyboard__item').forEach((el) => {
      el.remove();
    });
    if (isRu) {
      localStorage.setItem('lang', 'en');
      initKeys(languages['en']);
    } else {
      localStorage.setItem('lang', 'ru');
      initKeys(languages['ru']);
    }
  }
}
