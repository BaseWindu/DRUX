
export default class Slider {
  constructor (options) {
    this.options = options
    console.log(this.options)
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }

  init() {

    let container = document.createElement('div')

    let toggleSwitch = document.createElement('label')
    toggleSwitch.class = 'switch'
    container.append(toggleSwitch)
    
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.class = 'slider'
    checkbox.id = this.options.id
    toggleSwitch.append(checkbox)

    let slider = document.createElement('span')
    checkbox.append(slider)






    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}
