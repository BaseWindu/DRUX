export default class Coords {
  constructor() {
    this.location = {
      x: 0,
      y: 0,
      z: 0
    }
  }

  get3dFrom2d(location) {
    let particle = window.particle
    let vector = new THREE.Vector3()

    vector.set(
      ( location.x / window.innerWidth ) * 2 - 1,
      - ( location.y / window.innerHeight ) * 2 + 1,
      0.5
    )

    vector.unproject(particle.camera)

    let dir = vector.sub(particle.camera.position).normalize()
    let distance = - particle.camera.position.z / dir.z
    let position = particle.camera.position.clone().add(dir.multiplyScalar(distance))

    return(position)
  }

  get3dPosition(layout) {
    // Find out if we're s, m, l
    let screenSize = 'large' 

    let width = layout[screenSize] * (window.innerWidth / 12)
    /*

    if((width + this.location.x) >= window.innerWidth) {
      
    }
    if(vector.x * 1.1 >= window.
    */

    let vector = new THREE.Vector3()
    vector.x = width

    return(vector)
  }
}


