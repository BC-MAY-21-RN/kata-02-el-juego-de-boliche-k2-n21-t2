import Lanzamiento from "./lanzamiento";

export default class Frame{
  constructor(puntajeAnterior) {
    // Aqui van las propiedades
    this.lanzamientos = [];
    this.puntajeActual = 0;
    this.puntajeAnterior = puntajeAnterior
    this.puntajeFinal = 0;

  }
  // Aqui van los metodos
  // Metodo es realizar lanzamiento
  // Metodo sacar puntaje total
  // M
  // El puntaje final es la suma del puntaje anterior mas el puntaje actual
  get getPuntajeFinal() {
    return this.puntajeFinal
  }

  get getPuntajeActual() {
    return this.puntajeActual = 0
  }

  get getLanzamientos() {
    return this.lanzamientos
  }

  realizarLanzamientos() {
    let puntajeLanzamiento = 0
    for(let i = 0; i < 2; i++){
      
      let lanzamiento = new Lanzamiento(puntajeLanzamiento)
      lanzamiento.asignarPuntajeActual()
      this.lanzamientos.push(lanzamiento) 

      puntajeLanzamiento = lanzamiento.puntajeActual
    }
  }
  
  obtenerPuntajeActual () {
    this.lanzamientos.map( lanzamiento => {
      this.puntajeActual +=  lanzamiento.puntajeActual
    }) 
    this.puntajeActual += this.puntajeAnterior
  }

}

