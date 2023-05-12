//SVG controlls
function svgControlls() {

  //zoom****************************************************

  //by mouse wheel
  svgCont.addEventListener("wheel", wheel);
  //by buttons
  plusButton.addEventListener("click", plus);
  minusButton.addEventListener("click", minus);

  //drag****************************************************
  svgCont.addEventListener("mousedown",(e)=> down(e,"mousemove"));

  svgCont.addEventListener("mouseup", (e) => up(e,"mousemove"));
  svgCont.addEventListener("mouseleave", (e) => leave(e, "mousemove"));
  
  for (let i = 0; i < svgPaths.length; i++) {
    svgPaths[i].addEventListener('dblclick', (e)=>wiki(i));
  }
  //phone stuff
  svgCont.addEventListener('touchstart', (e) => {
    console.log("touchstart");
    down(e, "touchmove")
  });

  svgCont.addEventListener('touchend', (e) => { 
    console.log("touchend");
    up(e, "touchmove")
  });
  svgCont.addEventListener('touchcancel', (e) => { 
    console.log("touchcancel");
    leave(e, "touchmove")
  });


}

export default { svgControlls };