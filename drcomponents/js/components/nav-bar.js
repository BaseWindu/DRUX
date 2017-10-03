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

    let individual = document.createElement('li')
    let t = document.createTextNode('individual view')
    individual.append(t)
    navBar.append(individual)

    let group  = document.createElement('li')
    let text = document.createTextNode('group view ')
    group.append(text)
    navBar.append(group)


    let deviceType  = document.createElement('li')
    let x  = document.createTextNode('device type')
    deviceType.append(x)
    navBar.append(deviceType)

    

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject(container)

    this.object = cssObject

    return(this.object)
  }  
}
