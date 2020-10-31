export default function initKeys(lang) {
  lang.forEach((el) => {
    let div = document.createElement('div');
    div.className = 'keyboard__item';
    div.setAttribute('data', el['num']);
    div.setAttribute('data-code', el['code']);
    div.textContent = el['sign'];
    document.querySelector('.keyboard__list').append(div);
  });
}
