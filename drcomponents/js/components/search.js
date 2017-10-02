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

    let search = document.createElement('input')
    search.id = this.options.id
    search.type = 'text'
    search.placeholder = this.options.placeholder
    container.append(search)

    search.style.width = '100%'
    search.style.border = ' 3px solid #00B4CC'
    search.style.padding =  '5px'
    search.style.height = '20px'
    search.style.borderRadius = '5px'
    search.style.outline = 'none'
    search.style.color = '#9DBFAF'

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
