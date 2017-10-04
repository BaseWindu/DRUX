export default class SelectList {
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

    let selectList = document.createElement('select')
    selectList.id = this.options.id
    container.append(selectList)

    selectList.style.borderRadius = '25px'
    selectList.style.boxShadow = '0 4px 6px -5px hsl(0,0%,40%), inset 0px 4px 6px -5px hsl(0,0%,2%)'

    this.options.data.forEach( (item)=>{
        
      let option = document.createElement('option')
      option.value = item.value
      option.append(item.name)
      selectList.append(option)
    
    })
    

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject(container )

    this.object = cssObject

    return(this.object)
  }
}
