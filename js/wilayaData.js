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
  };
  //hide popUp
  svg.addEventListener("mouseleave", () => {
    popUp.style.display = "none";
  });
  //change popUp position
  svg.addEventListener("mousemove", (event) => {
    popUp.style.left = 20 + event["clientX"] + "px";
    popUp.style.top = -60 + event["clientY"] + "px";
  });
}
export default { wilayaData }