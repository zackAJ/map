//functions
function classToggle(array, boolean, className) {
  for (let i = 0; i < array.length; i++) {
    if (boolean) {
      array[i].classList.add(className);
    } else {
      array[i].classList.remove(className);
    }
  }
}
function pos(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
function drag(event, e) {
  let clickX = e["clientX"];
  let clickY = e["clientY"];
  let moveX = event["clientX"];
  let moveY = event["clientY"];
  let deltaX = moveX - clickX;
  let deltaY = moveY - clickY;
  let xx = Xsvg + deltaX / (zoom);
  let yy = Ysvg + deltaY / (zoom);
  svg.style.transform = `scale(${zoom}) translate(${xx}px, ${yy}px)`;
  resetX = xx;
  resetY = yy;
}
export default { classToggle, pos, drag }