export default class Coords {
  constructor(camera) {
    this.camera = camera
    this.location = {
      x: 100,
      y: 50,
      z: 0
    }
  }

  get3dFrom2d(location) {
    let vector = new THREE.Vector3()

    vector.set(
      ( location.x / window.innerWidth ) * 2 - 1,
      - ( location.y / window.innerHeight ) * 2 + 1,
      0.5
    )

    vector.unproject(this.camera)

    let dir = vector.sub(this.camera.position).normalize()
    let distance = - this.camera.position.z / dir.z
    let position = this.camera.position.clone().add(dir.multiplyScalar(distance))

    return(position)
  }

  get3dWidth(object) {
    let width3d = this.get3dFrom2d({
      x: object.x,
      y: object.y,
      z: 0
    })
    console.log(width3d)
  }

  get3dPosition(layout) {
    // Find out if we're s, m, l
    let screenSize = 'large' 

    let width = layout[screenSize] * (window.innerWidth / 12)
    let xMin = this.location.x
    let xMax = width + this.location.x

    console.log({
      elementWidth: width,
      xMin: xMin,
      xMax: xMax,
      y: this.location.y,
      windowWidth: window.innerWidth
    })

    let x = xMin
    let y = this.location.y

    let coords3d = this.get3dFrom2d({
      x: x,
      y: y,
      z: 0
    })

    if(xMax < window.innerWidth) {
      this.location.x = xMax
    }
    else {
      this.location.x = 100
      this.location.y += 100 
    }

    let objectWidth = this.get3dFrom2d({
      x: - (width / 2),
      y: 0,
      z: 0
    })

    console.log({
      objectWidth: objectWidth
    })

    return(coords3d)
  }
}


