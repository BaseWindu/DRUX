import Coords from '../utils/coords'

export default class Table {
  constructor (options) {
    this.options = options
  }

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }

  
  init() {
    let geometry = new THREE.PlaneGeometry( 40, 40, 1 )
    let material = new THREE.MeshBasicMaterial( { color: 0x007aa1 } )
    this.object = new THREE.Mesh( geometry, material )

    return(this.object)

  }
  

  init() {
    let table = document.createElement('div')

    table.style.width = `${window.innerWidth}px`
    table.style.backgroundColor = '#007aa1'
    let rowBackgroundColor = ''
    this.options.data.forEach((item,index) => {
      console.log({item: item})
      // create the dom Element

      let tableRow = document.createElement( 'div' )
      tableRow.style.display = 'flex'
      tableRow.style.border = '1px solid #fafafa'
      tableRow.style.backgroundColor = '#007aa1'
      tableRow.style.fontSize = '24px'
      tableRow.style.color = '#000000'
      tableRow.style.borderTop = '1px solid'
      if((index + 1) % 2 === 0) {
        tableRow.style.backgroundColor = '#F7F5F5'
      }
      else {
        tableRow.style.backgroundColor = '#D8D8D8'
      }
      let tableData = document.createElement('div')
      tableData.style.flex = '1'
      tableData.style.padding = '10px 10px'
      let tableName = document.createElement('div')
      tableName.innerHTML = `
        <div>
          <div style="font-weight: bold;">
            ${item[this.options.design.name.title]}
          </div>
          <div>
            ${item[this.options.design.name.description]}
          </div>
        </div>
      `
      tableData.append(tableName)
      tableRow.append(tableData)
      /*Object.keys(item).forEach((key) => {
        let tableData = document.createElement('div')
        tableRow.style.border = '1px solid #fafafa'
        tableRow.style.backgroundColor = '#007aa1'
        tableRow.style.textAlign = 'center'
        tableRow.style.fontSize = '24px'
        tableRow.style.color = '#fafafa'
        tableRow.style.flex = '1'
        tableData.append(item[key])
        tableRow.append(tableData)

      })*/

      table.append(tableRow)
      
      


    })

    // create the object3d for this table
    let cssObject = new THREE.CSS3DObject(table)
    this.object = cssObject
    console.log(this.object)
    return(this.object)
  }
}
