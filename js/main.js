import Frame from "./components/frame.js"

class Main {
  constructor() {
    this.frames = []
    this.puntajeDelFrameAnterior = 0
  }

  getFrames() {
    this.frames.map( frame => console.log(frame))
  }

  jugar() {
    for(let index = 0; index < 10; index++) {
      if(index == 9){

        let frame = new Frame(this.puntajeDelFrameAnterior)
        this.modificarFrame(index,frame)

      }else{

        let frame = new Frame(this.puntajeDelFrameAnterior)
        this.modificarFrame(index,frame)
      }
    }    
  }
  modificarFrame(index,frame){
    index == 9 ? frame.realizarTresLanzamientos() :frame.realizarLanzamientos();
    frame.obtenerPuntajeActual();
    this.puntajeDelFrameAnterior = frame.getPuntajeActual
    this.frames.push(frame)
  }

  condicionesDeJuego() {
    this.frames.map( (frame, index) => {
      let lanzamientos = frame.getLanzamientos

      if(lanzamientos[0].puntajeActual + lanzamientos[1].puntajeActual == 10){
        lanzamientos[0].puntajeActual == 10 ? this.hicisteChusa(index) : this.hicisteSpare(index)
        
      }
    })
  }


  hicisteChusa(index){
    this.frames[index].newPuntajeConBonus(
      this.frames[index + 1].getLanzamientos[0].getPuntajeActual 
      +  
      this.frames[index + 1].getLanzamientos[1].getPuntajeActual 
    )     
    this.actualizarPuntajes(index + 1)
  }

  actualizarPuntajes(index) {
    for (let i = index; i < this.frames.length; i++) {
      this.frames[i].setPuntajeAnterior = this.frames[i-1].getPuntajeActual
      this.frames[i].actualizarPuntaje()
    }
  }

  hicisteSpare(index){
    this.frames[index].newPuntajeConBonus(
      this.frames[index + 1].getLanzamientos[0].getPuntajeActual 
    )
    this.actualizarPuntajes(index + 1)
  }
}

let main = new Main()

main.jugar()
main.condicionesDeJuego()
main.getFrames()


