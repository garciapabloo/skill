import Modelo from "./modelo.js";
import Controlador from "./controlador.js";
import Vista from "./vista.js";

const modelo = new Modelo();
const controlador = new Controlador(modelo);
const vista = new Vista ( controlador );
vista.init()

