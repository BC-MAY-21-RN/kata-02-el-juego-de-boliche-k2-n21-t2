export default class Lanzamiento {
  constructor(puntajeAnterior) {
    this.puntajeAnterior = puntajeAnterior;
    this.puntajeActual = 0;
    // Aqui las propiedades
    // Un lanzamiento puede derribar hasta 10 pines pero no se pueden derribar mas de 10 pines en dos lanzamientos
    // Cada lanzamiento debe recibir los puntos del lanzamiento anterior (para que el puntaje total entre los dos lanzamientos no supere el 10 en puntaje)
    
  }

  // Aqui van los metodos
  // Solo debe retornar el putaje de este lanzamiento nada mas
  get getPuntajeActual() {
    return this.puntajeActual
  }

  asignarPuntajeActual() {      // puntaje anterio: 6     11 - 0   limiteRandom = 11  11- 8    2 0 --- > 2 
    let limitRandom = 11 - this.puntajeAnterior
    this.puntajeActual = Math.floor(Math.random() * (limitRandom - 0)) + 0; // 5
    
  }

}
