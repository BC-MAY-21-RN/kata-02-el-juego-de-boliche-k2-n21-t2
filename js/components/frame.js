import Lanzamiento from "./lanzamiento";

export default class Frame{
  constructor(puntajeAnterior) {
    // Aqui van las propiedades
    this.lanzamientos = [];
    this.puntajeActual = 0;
    this.puntajeAnterior = puntajeAnterior

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
    return this.puntajeActual
  }

  get getLanzamientos() {
    return this.lanzamientos
  }

  set setPuntajeAnterior(nuevoPuntaje){
    this.puntajeAnterior = nuevoPuntaje
  }

  // Este metodo recibe el puntaje de los dos siguientes lanzamientos
  // Suma el puntaje de los dos lanzamientos y depues los suma con el
  // puntaje actual para sacar el nuevo puntaje de la chuza o strike
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

  // Esta funcion sirve para refrescar el puntaje actual de cada Frame
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

