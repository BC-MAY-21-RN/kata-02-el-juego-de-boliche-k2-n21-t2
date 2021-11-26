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
    this.frames.map( frame => {
      let lanzamientos = frame.getLanzamientos
      lanzamientos[0] == 10 ? hicisteChusa() : null
      lanzamientos[0] + lanzamientos[1] == 10 ? hicisteSpare() : null
    })
  }

  hicisteChusa(){

  }

  hicisteSpare(){
    
  }
  // Aqui debe inizializarse el juego cuando imprimamos en consola
}

let main = new Main()

main.jugar()
console.log(main.getFrames)
