import Frame from "./components/frame.js"

class Main {
  constructor() {
    this.frames = []
    this.puntajeDelFrameAnterior = 0
  }

  get getFrames() {
    return this.frames
  }

  jugar() {
    for(let index = 0; index < 10; index++) {
      
      let frame = new Frame(this.puntajeDelFrameAnterior)
      frame.realizarLanzamientos();
      frame.obtenerPuntajeActual();

      this.frames.push(frame)
      this.puntajeDelFrameAnterior = frame.getPuntajeFinal

    }
  }

  condicionesDeJuego() {
    this.frames.map( (frame, index) => {
      let lanzamientos = frame.getLanzamientos
      lanzamientos[0] == 10 ? hicisteChusa(index) : null
      lanzamientos[0] + lanzamientos[1] == 10 ? hicisteSpare(index) : null
    })
  }

  // Esta funcion recibe el frame al que se le aplicara la chusa
  hicisteChusa(index){
    // En esta linea mandamos a llamar a la funcion nuevo puntaje con chusa, 
    // a la cual le mandamos como parametro los puntajes de los siguientes dos 
    // lanzamientos. La funcionalidad del metodo esta descrita en la clase Frame
    this.frames[index].newPuntajeConBonus(
      this.frames[index + 1].lanzamientos[0].getPuntajeActual 
      +
      this.frames[index + 1].lanzamientos[1].getPuntajeActual 
    )     

    // Le enviamos a actualizar putaje el numero del index mas 1 porque queremos
    // actualizar los puntajes posteriores al de la chusa, porque el puntaje del 
    // frame que saco la chusa ya se actualizo
    actualizarPuntajes(index + 1)
  }

  // Este metodo atualiza el puntaje de los frames posteriores al frame que hizo
  // la huza o strike
  actualizarPuntajes(index) {
    // Con esta linea le indicamos al ciclo que itere los frames posteriores al 
    // que hizo el strike
    for (let i = index; i < this.frames.length; i++) {
      // Aqui actualizamos el puntaje anterior de cada uno de los frames para
      // ir sumando los nuevos puntajes
      this.frames[i].puntajeAnterior = this.frames[i-1].getPuntajeActual
      // Aqui mandamos a llamar al metodo actualizar puntajes el cual esta 
      // descrito en la clase frame
      this.frames[i].actualizarPuntaje()
    }
  }

  hicisteSpare(index){
    // Le manda el bonus al frame para que actualice el puntaje
    this.frames[index].newPuntajeConBonus(
      this.frames[index + 1].lanzamientos[0].getPuntajeActual 
    )

    // Actualiza los puntajes de los siguientes frames
    actualizarPuntajes(index + 1)
  }

  // YA AGREGA LOS BONUS POR STRIKE Y POR SPARE PERO AUN FALTAN ALGUNAS 
  // CONDICIONALES
}

let main = new Main()

main.jugar()
console.log(main.getFrames)
