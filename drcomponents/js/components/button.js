export default class Button {
  constructor (options) {
    this.options = options
    console.log(this.options)
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }
  
  init() {
    let container = document.createElement('div')

    let button = document.createElement('button')
    button.id = this.options.id
    button.value = this.options.value
    container.append(button)

    let text = document.createTextNode('Take Control')
    button.append(text)

    button.style.backgroundColor = '#77A3B9'
    button.style.padding = '25px 30px'
    button.style.borderRadius = '5px'
    button.style.textAlign = 'center'
    button.style.color = 'white'
    button.style.textTransform = 'uppercase'
    button.style.display = 'inline-block'
  

    
  // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}

