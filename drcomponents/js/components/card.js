export default class Card {
  constructor (options) {
    this.options = options
    console.log(this.options)
  } 

  init() {
    // create the dom Element
    let element = document.createElement( 'div' )
    element.innerHTML = `<p>${this.options.text}</p>`
    element.style.width = `${this.options.width}px`
    element.style.height = `${this.options.height}px`
    element.style.boxShadow = '0px 0px 12px rgba(0,255,255,0.5)'
    element.style.border = '1px solid rgba(127,255,255,0.25)'
    element.style.textAlign = 'center'
    element.style.cursor = 'default'
    element.style.backgroundColor = 'rgba(0,127,127,0.49)'
    element.style.fontSize = '24px'

    // create the object3d for this element
    let cssObject = new THREE.CSS3DObject( element )

    this.object = cssObject

    return(this.object)
  }
}
