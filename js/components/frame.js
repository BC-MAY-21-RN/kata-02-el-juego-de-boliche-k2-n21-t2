import Lanzamiento from "./lanzamiento";

export default class Frame{
  constructor(puntajeAnterior) {
    this.lanzamientos = [];
    this.puntajeActual = 0;
    this.puntajeAnterior = puntajeAnterior

  }
  get getPuntajeFinal() {
    return this.puntajeFinal
  }

  get getPuntajeActual() {
    return this.puntajeActual
  }

  get getLanzamientos() {
    return this.lanzamientos
  }

  set setPuntajeAnterior(nuevoPuntaje){
    this.puntajeAnterior = nuevoPuntaje
  }

  newPuntajeConBonus(puntajeAdicional) {
    this.puntajeActual += puntajeAdicional
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
  
  obtenerPuntajeActual() {
    this.lanzamientos.map( lanzamiento => {
      this.puntajeActual +=  lanzamiento.getPuntajeActual
  
    }) 
    this.puntajeActual += this.puntajeAnterior

  }

  actualizarPuntaje(){
    this.puntajeActual = 0
    this.obtenerPuntajeActual()
  }

  realizarTresLanzamientos(){
    let puntajeLanzamiento = 0
    for(let i = 0; i < 3; i++){
      
      if(i==2){
        puntajeLanzamiento = 0
      }
  
      let lanzamiento = new Lanzamiento(puntajeLanzamiento)
      lanzamiento.asignarPuntajeMenorAVeinte()
      this.lanzamientos.push(lanzamiento) 

      puntajeLanzamiento = lanzamiento.puntajeActual
    }
  }

}

