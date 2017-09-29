export default class TextField {
  constructor (options) {
    this.options = options
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }

  init() {
    let container = document.createElement('div')

    let label = document.createElement('label')
    label.for = this.options.id
    label.append(this.options.label)
    container.append(label)

    let textField = document.createElement( 'input' )
    textField.type = 'text'
    textField.placeholder = this.options.placeHolder
    textField.id = this.options.id
    container.append(textField)

    // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}


