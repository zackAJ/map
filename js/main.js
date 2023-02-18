import declarations from "./declarations.js";
import functions from "./functions.js";
import data from "./wilayaData.js";
import control from "./svgControlls.js";
Object.entries(declarations).forEach(([name, exported]) => window[name] = exported);
Object.entries(functions).forEach(([name, exported]) => window[name] = exported);
Object.entries(data).forEach(([name, exported]) => window[name] = exported);
Object.entries(control).forEach(([name, exported]) => window[name] = exported);

data.wilayaData();
svgControlls();