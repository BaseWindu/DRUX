import Card from './components/card'

export default class Entry {
  constructor() {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 10000 )
    this.camera.position.z = 1000

    this.renderer = new THREE.CSS3DRenderer()
    this.renderer.setSize( window.innerWidth, window.innerHeight )
    this.renderer.domElement.style.position = 'absolute'
    this.renderer.domElement.style.top = 0
    this.renderer.domElement.style.zIndex = 0

    this.container = document.getElementById('container')
    this.container.appendChild(this.renderer.domElement)

    let card = new Card({
      width: '800',
      height: '800',
      text: 'It works'
    })

    this.scene.add(card.init())

    this.renderer.render(this.scene, this.camera)
  }
}

let entry = new Entry()
