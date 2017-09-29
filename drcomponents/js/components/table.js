import Coords from '../utils/coords'

export default class Table {
  constructor (options) {
    this.options = options
  }

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }

  
  init() {
    let geometry = new THREE.PlaneGeometry( 40, 40, 1 )
    let material = new THREE.MeshBasicMaterial( { color: 0x007aa1 } )
    this.object = new THREE.Mesh( geometry, material )

    return(this.object)

  }
  

  init() {
    let menuContainer = document.createElement('div')

    menuContainer.style.width = `${window.innerWidth}px`
    menuContainer.style.backgroundColor = '#007aa1'
    menuContainer.style.display = 'flex'

    this.options.data.forEach((menuItem) => {
      console.log({menuItem: menuItem})
      // create the dom Element

      let table = document.createElement( 'div' )
      table.id = this.options.id
      table.value = menuItem.value
      table.append(menuItem.name)
      table.style.border = '1px solid #fafafa'
      table.style.backgroundColor = '#007aa1'
      table.style.textAlign = 'center'
      table.style.fontSize = '24px'
      table.style.color = '#fafafa'
      table.style.flex = '1'

      menuContainer.append(table)

    })

    // create the object3d for this table
    let cssObject = new THREE.CSS3DObject(menuContainer)
    this.object = cssObject
    console.log(this.object)
    return(this.object)
  }
}
