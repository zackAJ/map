// WilayaData
function wilayaData() {
  for (let i = 0; i < svgPaths.length; i++) {
    let wilaya = svgPaths[i]["id"]
      .substring(4)
      .replace("-", " ")
      .replace("_", " ")
      .replace("-", " ")
      .replace("_", " ");
    let matricule = i + 1;

    //get wilaya list clean
    wilayaList.push(wilaya + " " + matricule);

    //show popUp
    svgPaths[i].addEventListener("mouseenter", (event) => {
      popUp.style.display = "block";
      popUp.innerText = wilayaList[i];
    });
    svgPaths[i].addEventListener("touchstart", (event) => {
      popUp.style.display = "block";
      popUp.innerText = wilayaList[i];
      if (event.targetTouches.length == 1) {
        popUp.classList.add('popMobile');
        [...svgPaths].forEach(path => {
          path.classList.remove('wilayaPath-hover');
        })
        svgPaths[i].classList.add('wilayaPath-hover');
      }
    });

  };
  //hide popUp
  svg.addEventListener("mouseleave", () => {
    popUp.style.display = "none";
  });
  //change popUp position
  svg.addEventListener("mousemove", (event) => {
    popUp.style.left =20+ event["clientX"]- pos(svgCont).left + "px";
    popUp.style.top =-60+ event["clientY"] - pos(svgCont).top + "px";
  });
}
export default { wilayaData }