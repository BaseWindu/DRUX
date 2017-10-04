export default class Search {
  constructor (options) {
    this.options = options
      console.log(this.options)
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }

  init() {
    // create the dom Element
    let container  = document.createElement( 'div' )

    let label = document.createElement('label')
    label.for = this.options.id
    label.append(this.options.label)
    container.append(label)
    label.style.padding = '25px'
    
    let search = document.createElement('input')
    search.id = this.options.id
    search.type = 'text'
    search.placeholder = this.options.placeholder
    container.append(search)

    search.style.padding =  '5px'
    search.style.borderRadius = '5px'
    search.style.outline = 'none'

    let button = document.createElement('button')
    button.id = this.options.button
    button.type = 'submit'
    search.append(button)

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject(container )

    this.object = cssObject

    return(this.object)
  }
}
