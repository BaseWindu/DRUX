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

    label.style.borderRadius = '5px'
    label.style.padding = '3px'
    label.style.outline = '1px solid grey'
    label.style.backgroundColor = '#D8D8D8'

    let textField = document.createElement( 'input' )
    textField.type = 'text'
    textField.placeholder = this.options.placeHolder
    textField.id = this.options.id
    container.append(textField)

    textField.style.backgroundColor = '#F7F5F5'
    textField.style.borderRadius = '3px'
    textField.style.padding = '5px'
    textField.style.outline = '1px hidden'

    // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}


