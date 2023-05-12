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
function drag(event, e, isMobile) {
  if (!isMobile) {
    var clickX = e["clientX"];
    var clickY = e["clientY"];
    var moveX = event["clientX"];
    var moveY = event["clientY"];
  } else {
    var clickX = e.touches[0]["clientX"];
    var clickY = e.touches[0]["clientY"];
    var moveX = event.touches[0]["clientX"];
    var moveY = event.touches[0]["clientY"];
  }
  let deltaX = moveX - clickX;
  let deltaY = moveY - clickY;
  let xx = Xsvg + deltaX / (zoom);
  let yy = Ysvg + deltaY / (zoom);
  svg.style.transform = `scale(${zoom}) translate(${xx}px, ${yy}px)`;
  resetX = xx;
  resetY = yy;
}
function wheel(e) {

  svg.style.transition = "transform 500ms";
  e.preventDefault();
  if (zoom >= maxZoom) {
    if (e.deltaY > 0) {
      zoom -= 0.25;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
    }
  } else if (zoom <= minZoom) {
    if (e.deltaY < 0) {
      zoom += 0.25;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
    }
  } else if (zoom < maxZoom && zoom > minZoom) {
    if (e.deltaY < 0) {
      zoom += 0.25;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
    } else if (e.deltaY > 0) {
      zoom -= 0.25;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
    }
  }

}
function plus(e) {
  svg.style.transition = "transform 500ms";
  if (zoom < maxZoom) {
    zoom += 0.5;
    svg.style.transform = `scale(${zoom}) translate(${Xsvg}px,${Ysvg}px)`;
  }
}
function minus(e){
  svg.style.transition = "transform 500ms";

  if (zoom > minZoom) {
    zoom -= 0.5;
    svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
  }
}
function down(e,move,isMobile) {
  e.preventDefault();
  svg.style.transition = "none";
  svgCont.addEventListener(move, dragCallback = (ev) => {
    classToggle(svgPaths, true, "grabbing");
    svgCont.classList.add("grabbing");
    drag(ev, e,isMobile);
  }
  );
};
function up(e,move) {
  svgCont.classList.remove("grabbing");
  classToggle(svgPaths, false, "grabbing");
  svgCont.removeEventListener(move, dragCallback);
  Xsvg = resetX;
  Ysvg = resetY;
}
function leave(e,move) {
  svgCont.removeEventListener(move, dragCallback);
  Xsvg = resetX;
  Ysvg = resetY;
  svgCont.classList.remove("grabbing");
  classToggle(svgPaths, false, "grabbing");
};
function wiki(i) {
  let wilaya = wilayaList[i].substring(0, i.length == 2 ? wilayaList[i].length - 3 : wilayaList[i].length - 2);
  window.open(`https://en.wikipedia.org/w/index.php?search=${wilaya}`, '_blank');
}
export default { classToggle,pos, drag, wheel,plus,minus,down,up,leave,wiki }