export default class Paginator {
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

    let paginator = document.createElement('div')
    paginator.id = this.options.id
    container.append(paginator)


    paginator.style.display = 'inline-block'


    let page1 = document.createElement('href')
    let text = document.createTextNode('1') 
    page1.append(text)
    paginator.append(page1)
    
    let page2 = document.createElement('href')
    let text2 = document.createTextNode('2') 
    page2.append(text2)
    paginator.append(page2)
    
    let page3 = document.createElement('href')
    let text3= document.createTextNode('3') 
    page3.append(text3)
    paginator.append(page3)
    // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}


