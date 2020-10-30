export default function initKeys(lang) {
  lang.forEach((el) => {
    let div = document.createElement('div');
    div.className = 'keyboard__item';
    div.setAttribute('data', el['num']);
    if (el['right']) {
      div.setAttribute('data-place', el['right']);
    }
    div.textContent = el['sign'];
    document.querySelector('.keyboard__list').append(div);
  });
}
