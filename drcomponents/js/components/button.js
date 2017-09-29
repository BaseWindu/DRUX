export default class Button {
  constructor (options) {
    this.options = options
    console.log(this.options)
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
  }
  
  init() {
    let container = document.createElement('div')

    let button = document.createElement('button')
    button.id = this.options.id
    button.value = this.options.value
    container.append(button)
  

    
  // create the object3d
    let cssobject = new three.css3dobject( container )

    this.object = cssobject

    return(this.object)
  }
}

