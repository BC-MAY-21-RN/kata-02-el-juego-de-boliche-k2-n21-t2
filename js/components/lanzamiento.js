export default class Lanzamiento {
  constructor(puntajeAnterior) {
    this.puntajeAnterior = puntajeAnterior;
    this.puntajeActual = 0;
  }

  get getPuntajeActual() {
    return this.puntajeActual
  }

  asignarPuntajeActual() { 
    let limitRandom = 11 - this.puntajeAnterior
    this.puntajeActual = Math.floor(Math.random() * (limitRandom - 0)) + 0; // 5
    
  }

  asignarPuntajeMenorAVeinte() {
    let limitRandom = 11 - this.puntajeAnterior
    this.puntajeActual = Math.floor(Math.random() * (limitRandom - 0)) + 0; // 5
   
  }

}
