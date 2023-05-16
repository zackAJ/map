//SVG controlls
function svgControlls() {

  //zoom****************************************************

  //by mouse wheel
  svgCont.addEventListener("wheel", wheel);
  //by buttons
  plusButton.addEventListener("click", plus);
  minusButton.addEventListener("click", minus);

  //drag****************************************************
  // svgCont.addEventListener("mousedown",(e)=> down(e,"mousemove",false));

  svgCont.addEventListener("mouseup", (e) => up(e,"mousemove"));
  svgCont.addEventListener("mouseleave", (e) => leave(e, "mousemove"));
  
  for (let i = 0; i < svgPaths.length; i++) {
    svgPaths[i].addEventListener('dblclick', (e)=>wiki(i));
   
  }




  //phone stuff**************************************
  svgCont.addEventListener('touchstart', (e) => {
    down(e, "touchmove",true)
  },true);

  svgCont.addEventListener('touchend', (e) => { 
    up(e, "touchmove")
  },true);
  svgCont.addEventListener('touchcancel', (e) => { 
    up(e, "touchmove")
  },true);

 

  //by buttons
  plusButton.addEventListener("touchstart", plus);
  minusButton.addEventListener("touchstart", minus);

}

export default { svgControlls };