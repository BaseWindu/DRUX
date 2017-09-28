export default class SelectList {
  constructor (options) {
    this.options = options
      console.log(this.options)
  } 

  init() {
    // create the dom Element
    let container  = document.createElement( 'div' )

    let selectList = document.createElement('select')
    selectList.id = this.options.id
    container.append(selectList)

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