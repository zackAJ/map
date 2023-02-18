//SVG controlls
function svgControlls() {

  //zoom****************************************************

  //by mouse wheel
  svgCont.addEventListener("wheel", (e) => {
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
  });
  //by buttons
  plusButton.addEventListener("click", function (e) {
    svg.style.transition = "transform 500ms";
    if (zoom < maxZoom) {
      zoom += 0.5;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px,${Ysvg}px)`;
    }
  });
  minusButton.addEventListener("click", (e) => {
    svg.style.transition = "transform 500ms";

    if (zoom > minZoom) {
      zoom -= 0.5;
      svg.style.transform = `scale(${zoom}) translate(${Xsvg}px, ${Ysvg}px)`;
    }
  });

  //drag****************************************************
  svgCont.addEventListener("mousedown", (e) => {
    e.preventDefault();
    svg.style.transition = "none";
    svgCont.addEventListener(
      "mousemove",
      (dragCallback = (ev) => {
        classToggle(svgPaths, true, "grabbing");
        svgCont.classList.add("grabbing");
        drag(ev, e);
      })
    );
  });

  svgCont.addEventListener("mouseup", (e) => {
    svgCont.classList.remove("grabbing");
    classToggle(svgPaths, false, "grabbing");
    svgCont.removeEventListener("mousemove", dragCallback);
    Xsvg = resetX;
    Ysvg = resetY;
  });
  svgCont.addEventListener("mouseleave", (e) => {
    svgCont.removeEventListener("mousemove", dragCallback);
    Xsvg = resetX;
    Ysvg = resetY;
    svgCont.classList.remove("grabbing");
    classToggle(svgPaths, false, "grabbing");
  });
}

export default { svgControlls }