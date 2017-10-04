export default class Button {
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

    let stat = document.createElement('button')
    stat.id = this.options.id
    stat.value = this.options.value
    container.append(stat)
    
    let text1 = document.createTextNode('Status')
    stat.append(text1)
    
    stat.style.backgroundColor = 'white'
    stat.style.padding = '25px 30px'
    stat.style.borderRadius = '5px'
    stat.style.textAlign = 'center'
    stat.style.color = 'black'
    stat.style.textTransform = 'uppercase'
    stat.style.display = 'inline-block'
    
    let control = document.createElement('button')
    control.id = this.options.id
    control.value = this.options.value
    container.append(control)

    let text = document.createTextNode('Take Control')
    control.append(text)

    control.style.backgroundColor = '#77A3B9'
    control.style.padding = '25px 30px'
    control.style.borderRadius = '5px'
    control.style.textAlign = 'center'
    control.style.color = 'white'
    control.style.textTransform = 'uppercase'
    control.style.display = 'inline-block'
  
  // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}

