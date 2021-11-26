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

  hicisteChusa(index){
    this.frames[index].newPuntajeConChusa(
      this.frames[index + 1].lanzamientos[0].getPuntajeActual 
      +
      this.frames[index + 1].lanzamientos[1].getPuntajeActual 
    )     
    actualizarPuntajes(index + 1)
  }


  actualizarPuntajes(index) {
    for (let i = index; i < this.frames.length; i++) {
      this.frames[i].puntajeAnterior = this.frames[i-1].getPuntajeActual
      this.frames[i].actualizarPuntaje()
    }
  }

  hicisteSpare(index){
    
  }
  // Aqui debe inizializarse el juego cuando imprimamos en consola
}

let main = new Main()

main.jugar()
console.log(main.getFrames)
