// DECLARATIONS
const svg = document.getElementById("svg");
const svgPaths = document.getElementsByClassName("wilayaPath");
const wilayaList = [];
const popUp = document.getElementById("popUp");
const svgCont = document.getElementById("mapCont");
var Ysvg = 0.0;
var Xsvg = 0.0;
var svgPosition = {
  zoom: 1,
  y: Ysvg,
  x: Xsvg,
};
var zoom = svgPosition.zoom;
var maxZoom = 4;
var minZoom = 0.5;
var resetX = 0.0;
var resetY = 0.0;
let dragCallback;
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");




export default{
  svg, svgPaths, wilayaList, popUp, svgCont, Ysvg, Xsvg, svgPosition, zoom, maxZoom, minZoom, resetX, resetY, dragCallback, plusButton, minusButton
}
