export default class NavBar {
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
    
    let container = document.createElement('div')

    let navBar = document.createElement('ul')
    navBar.id = this.options.id
    container.append(navBar)
    navBar.style.listStyle = 'none'
    navBar.style.margin = '0'
    navBar.style.padding = '0'
    navBar.style.overflow = 'hidden'
    navBar.style.backgroundColor = '#5D5D5D'
    navBar.style.display = 'inline-block'
    navBar.style.float = 'left'

    let individual = document.createElement('li')
    individual.name = this.options.name
    navBar.append(individual)

    let group = document.createElement('li')
    group.name = this.options.name
    navBar.append(group)

    let deviceType = document.createElement('li')
    deviceType.name = this.options.name
    navBar.append(deviceType)
    
    this.options.data.forEach( (item)=>{
        
      let name = document.createElement('option')
      name.value = item.value
      name.append(item.name)
      navBar.append(name)
      name.style.display = 'inline-block'
      name.style.color = 'white'
      name.textAlign = 'center'
      name.style.padding = '14px 16px'
    
    })

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject(container)

    this.object = cssObject

    return(this.object)
  }  
}
