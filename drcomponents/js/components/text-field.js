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

    label.style.borderRadius = '10px 0 0 10px'
    label.style.position = 'absolute'
    label.style.top = '0'
    label.style.left = '0'
    label.style.bottom = '0'
    label.style.padding = '0 20px'
    label.style.outline = 'none'
    label.style.backgroundColor = '#D8D8D8'
    label.style.height = '40px'
    label.style.inlineHeight = '40px'
    label.style.color = 'black'
    label.style.textAlign = 'center'

    let textField = document.createElement( 'input' )
    textField.type = 'text'
    textField.placeholder = this.options.placeHolder
    textField.id = this.options.id
    container.append(textField)

    textField.style.backgroundColor = '#F7F5F5'
    textField.style.display = 'inline-block'
    textField.style.borderRadius = '10px'
    textField.style.padding = '10px 10px 10px 100px'
    textField.style.outline = 'none'
    textField.style.width = '500px'
    textField.style.height = '40px'
    textField.style.boxSizing = 'border-box'
    textField.style.textAlign = 'center'

    // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}


