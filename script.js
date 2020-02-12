// program: paint by numbers cat
// author: kelly thomson
// date: 2-10-2020
// description: paint cat picture by coloring in cells

/////////////////////////////////////////////////////////
function generateTable() {
  var homework4 = document.createElement("div")
  homework4.id = "homework4"
  document.body.appendChild(homework4)

  var table = document.createElement('TABLE')
  table.setAttribute("id", "newTable")

  var tableHeader = document.createElement('THEADER')
  var tableBody = document.createElement('TBODY')

  table.style.width = '600px'
  table.style.border = '3px solid black'

  // table.style.columnWidth = "300px";
  // table.style.columnHeight = "600px";
  // document.getElementById("myDIV").style.columnWidth = "100px";

  var tr = document.createElement('TR')
  tableBody.appendChild(tr)

  // tr.style.height = '500px'


  addTableData(table)

  homework4.appendChild(table)
}

/////////////////////////////////////////////////////////
function addTableData(table) {
  var data = new Array()
  data[0] = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22")
  data[1] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ")
  data[2] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ")
  data[3] = new Array(" ", " ", " ", " ", " ", " ", "B", " ", " ", " ", " ", " ", "B", " ", " ", " ", " ", " ", " ", " ", " ", " ")
  data[4] = new Array(" ", " ", " ", " ", " ", "B", "P", "B", " ", " ", " ", "B", "P", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[5] = new Array(" ", " ", " ", " ", " ", "B", "P", "B", " ", " ", " ", "B", "P", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[6] = new Array(" ", " ", " ", " ", " ", "B", "B", "B", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[7] = new Array(" ", " ", " ", " ", " ", "B", "B", "B", "B", "W", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[8] = new Array(" ", " ", " ", " ", " ", "B", "B", "G", "B", "W", "B", "G", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[9] = new Array(" ", " ", " ", " ", " ", "B", "B", "B", "W", "P", "W", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[10] = new Array(" ", " ", " ", " ", " ", "B", "B", "W", "W", "W", "W", "W", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[11] = new Array(" ", " ", " ", " ", " ", "B", "B", "B", "W", "W", "W", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[12] = new Array(" ", " ", " ", " ", " ", " ", "B", "W", "W", "W", "W", "W", "B", " ", " ", " ", " ", " ", " ", " ", " ", " ")
  data[13] = new Array(" ", " ", " ", " ", " ", "B", "W", "W", "W", "W", "W", "W", "W", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[14] = new Array(" ", " ", " ", " ", " ", "B", "W", "W", "W", "W", "W", "W", "W", "B", " ", " ", " ", " ", " ", " ", " ", " ")
  data[15] = new Array(" ", " ", " ", " ", "B", "B", "W", "W", "W", "W", "W", "W", "W", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[16] = new Array(" ", " ", " ", " ", "B", "B", "W", "W", "W", "W", "W", "W", "W", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[17] = new Array(" ", " ", " ", " ", "B", "B", "B", "W", "W", "W", "W", "W", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[18] = new Array(" ", " ", " ", " ", "B", "B", "B", "B", "W", "W", "W", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[19] = new Array(" ", " ", " ", " ", "B", "B", "B", "B", "B", "W", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[20] = new Array(" ", " ", " ", " ", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ", " ")
  data[21] = new Array(" ", " ", " ", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ")
  data[22] = new Array(" ", " ", " ", "B", "B", "B", "B", "B", "B", "W", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ")
  data[23] = new Array(" ", " ", " ", "B", "B", "B", "B", "B", "B", "W", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ", " ")
  data[24] = new Array(" ", " ", "B", "B", "B", "B", "B", "B", "B", "W", "B", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ")
  data[25] = new Array(" ", " ", "B", "B", "B", "B", "B", "B", "B", "W", "B", "B", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ")
  data[26] = new Array(" ", " ", "B", "B", "B", "W", "B", "B", "B", "W", "B", "B", "B", "W", "B", "B", "B", "B", " ", " ", " ", " ")
  data[27] = new Array(" ", " ", "B", "B", "B", "W", "B", "B", "B", "W", "B", "B", "B", "W", "B", "B", "B", "B", "B", " ", " ", " ")
  data[28] = new Array(" ", " ", " ", "B", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", " ", "B", "B", "B", " ", " ")
  data[29] = new Array(" ", " ", " ", " ", " ", " ", "W", "W", "W", " ", "W", "W", "W", " ", " ", " ", " ", "B", "B", "B", " ", " ")
  data[30] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "B", "B", "B", " ", " ", " ")
  data[31] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "B", "B", "B", "B", "B", " ", " ", " ", " ")
  data[32] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "B", "B", "B", "B", "B", " ", " ", " ", " ", " ")
  data[33] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ")
  data[34] = new Array(" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ")


  for (var i = 0; i < data.length; i++) {
    var tr = table.insertRow(-1)
    tr.style.height = '25px'

    for(var j = 0; j < data[i].length; j++) {
      var td = tr.insertCell(-1)
    //  td.style.height = '20px'

      td.setAttribute("id", `row-${i}-column-${j}`)
      td.setAttribute("class", `row-${i}`)
      td.setAttribute("class", `column-${j}`)

      td.appendChild(document.createTextNode(data[i][j]))

      td.style.border = '1px solid black'
      td.style.background = 'grey'
    }
  }
}

/////////////////////////////////////////////////////////
function generateButton(backgroundColor, textColor) {
  var button = document.createElement("BUTTON")
  button.id = 'markCellButton'
  button.innerHTML = "MARK " + backgroundColor.toUpperCase()
  button.style.background = backgroundColor
  button.style.fontFamily = "Comic Sans MS,Charcoal,sans-serif"
  button.style.color = textColor

  document.body.appendChild(button)
  button.addEventListener("click", function(event) {
    markCell(backgroundColor)
  })
}

/////////////////////////////////////////////////////////
function selectCell(cell) {
  if (cell === null) {
    return null
  }
  cell.style.border = "3px solid #b573fd"
  cell.setAttribute("class", "selected")
}

/////////////////////////////////////////////////////////
function deselectCell(cell) {
  cell.style.border = "1px solid black"
  cell.removeAttribute("class", "selected")
}

/////////////////////////////////////////////////////////
function getCurrentCell() {
  return document.getElementsByClassName("selected")[0]
}

/////////////////////////////////////////////////////////
function markCell(color) {
  var cellToMark = getCurrentCell()
  cellToMark.style.backgroundColor = color
  cellToMark.style.border = "0px solid black"
  cellToMark.style.color = color    // this changes the font color to cell mark color
  selectCell(cellToMark)
}




// /////////////////////////////////////////////////////////
// function addText() {
//
//   var cell = getCurrentCell()
//
//
//
//   for (var i = 0; i < data.length; i++) {
//     for(var j = 0; j < data[i].length; j++) {
//
//       for ()
//         if (cell === null) {
//           return null
//         }
//
//         cell.style.color = 'black'  // sets text color to black
//     }
//   }
//
// }

// /////////////////////////////////////////////////////////
// function generateTextButton() {
//   var button = document.createElement("BUTTON")
//   button.id = 'textButton'
//   // button.innerHTML = "MARK " + backgroundColor.toUpperCase()
//   button.innerHTML = "ADD TEXT BACK TO ALL CELLS"
//   button.style.background = '#51efff'
//   button.style.fontFamily = "Comic Sans MS,Charcoal,sans-serif"
//   button.style.color = 'black'
//
//   document.body.appendChild(button)
//   button.addEventListener("click", function(event) {
//     // addText()
//   })
// }


/////////////////////////////////////////////////////////
function generateTextButton(backgroundColor, textColor) {
  var button = document.createElement("BUTTON")
  button.id = 'markCellButton'
  button.innerHTML = "ADD OR REMOVE TEXT FROM IMAGE"
  button.style.background = backgroundColor
  button.style.fontFamily = "Comic Sans MS,Charcoal,sans-serif"
  button.style.color = textColor

  document.body.appendChild(button)
  button.addEventListener("click", function(event) {
    addTextToCell()
  })
}


/////////////////////////////////////////////////////////
function addTextToCell() {
  var cellToMark = getCurrentCell()
  cellToMark.style.border = "0px solid black"
  cellToMark.style.color = 'black'    // this changes the font color to cell mark color
  selectCell(cellToMark)
}




/////////////////////////////////////////////////////////
function navigatorSupreme(keyCode) {
  const arrowKeys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  }

  switch (keyCode) {
    case arrowKeys.LEFT:
      handleLeftPress()
      break

    case arrowKeys.UP:
      handleUpPress()
      break

    case arrowKeys.RIGHT:
      handleRightPress()
      break

    case arrowKeys.DOWN:
      handleDownPress()
      break
  }
}

/////////////////////////////////////////////////////////
function extractIndices() {
  var selectedCell = getCurrentCell()
  var { id } = selectedCell

  var res = id.split("-");
//  document.getElementById("demo").innerHTML = res;
  console.log(res)

  rowIndex = res[1]
  columnIndex = res[3]

  console.log(rowIndex)
  console.log(columnIndex)

  return { rowIndex, columnIndex }
}

/////////////////////////////////////////////////////////
function handleKeyPress({ isVertical, indexMax, indexMin }) {
  var currentCell = getCurrentCell()
  var { rowIndex, columnIndex } = extractIndices()

  var axisToUse = isVertical ? parseInt(rowIndex) : parseInt(columnIndex)

  if (axisToUse > indexMax || axisToUse < indexMin) {
    return false
  }

  deselectCell(currentCell)
  return true
}

/////////////////////////////////////////////////////////
function handleLeftPress() {
  var handled = handleKeyPress({
    isVertical: false,
    indexMax: 22,
    indexMin: 1,
  })

  if (handled) {
    columnIndex--
  }

  currentCell = document.getElementById(
    `row-${rowIndex}-column-${columnIndex}`
  )
  selectCell(currentCell)
}

/////////////////////////////////////////////////////////
function handleUpPress() {
  var handled = handleKeyPress({
    isVertical: true,
    indexMax: 34,
    indexMin: 2,
  })

  if (handled) {
    rowIndex--
  }

  currentCell = document.getElementById(
    `row-${rowIndex}-column-${columnIndex}`
  )
  selectCell(currentCell)
}

/////////////////////////////////////////////////////////
function handleRightPress() {
  var handled = handleKeyPress ({
    isVertical: false,
    indexMax: 20,
    indexMin: 0,
  })

  if (handled) {
    columnIndex++
  }

  currentCell = document.getElementById(
    `row-${rowIndex}-column-${columnIndex}`
  )
  selectCell(currentCell)
}

/////////////////////////////////////////////////////////
function handleDownPress() {
  var handled = handleKeyPress ({
    isVertical: true,
    indexMax: 33,
    indexMin: 1,
  })

  if (handled) {
    rowIndex++
  }

  currentCell = document.getElementById(
    `row-${rowIndex}-column-${columnIndex}`
  )
  selectCell(currentCell)
}



/////////////////////////////////////////////////////////
function main() {
  document.body.style.fontFamily = "Comic Sans MS,Charcoal,sans-serif"
  generateTable()

  generateTextButton("#51efff", "black")
  generateButton("white", "black")
  generateButton("black", "white")
  generateButton("pink", "white")
  generateButton("green", "white")
  generateButton("grey", "black")

  document.addEventListener("keydown", function(event) {
    navigatorSupreme(event.keyCode)
  })

  var defaultCell = document.getElementById("row-1-column-0")
  selectCell(defaultCell)
}

/////////////////////////////////////////////////////////
main()
