export default class Coords {
  constructor(camera) {
    this.camera = camera
    this.X_DEFAULT = 0
    this.Y_DEFAULT = 50
    this.Z_DEFAULT = 0
    this.Y_STEP = 50
    this.resetLocation()
  }

  resetLocation() {
    this.location = {
      x: this.X_DEFAULT,
      y: this.Y_DEFAULT,
      z: this.Z_DEFAULT 
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
  }

  get3dPosition(layout) {
    // Find out if we're s, m, l
    // small - smaller than 768 px
    // medium - smaller than 1024 px
    // large - larger than 1024 px
 
    let screenSize = '' 
    if(window.innerWidth < 768) {
      screenSize = 'small'
    }
    else if(window.innerWidth < 1024) {
      screenSize = 'medium'
    }
    else {
      screenSize = 'large'
    }

    let width = layout[screenSize] * (window.innerWidth / 12)
    let xMin = this.location.x
    let xMax = width + this.location.x

    let x = xMin + (width / 2)
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
      this.location.x = this.X_DEFAULT
      this.location.y += this.Y_STEP
    }

    return(coords3d)
  }

}


