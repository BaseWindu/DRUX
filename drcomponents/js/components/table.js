export default class Table {
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

    let table = document.createElement('select')
    table.id = this.options.id
    container.append(table)

    this.options.data.forEach( (item)=>{
        
      let option = document.createElement('option')
      option.value = item.value
      option.append(item.name)
      table.append(option)
    
    })

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject(container )

    this.object = cssObject

    return(this.object)
  }
}
