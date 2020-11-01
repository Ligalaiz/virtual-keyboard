export default function addAnimationMouse(e) {
  if (!e.target.closest('div[data-code]')) return;
  e.target.closest('div[data-code]').classList.add('active');
}
