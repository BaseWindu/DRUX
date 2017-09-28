export default class TextField {
  constructor (options) {
    this.options = options
    console.log(this.options)
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
    textField.id = 'textField'
    container.append(textField)
    // create the object3d for this card
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}


