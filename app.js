const canvas = document.querySelector('.canvas')
let box
const cells = document.querySelectorAll('.cell')

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = 'blue'
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const generateCanvas = (canvasSize) => {
  removeAllChildNodes(canvas)
  canvas.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    box = document.createElement('div')
    box.classList.add('cell')
    box.addEventListener('mouseenter', handleMouseEnter)
    canvas.appendChild(box)
  }
}

const changeCanvasBtn = document.querySelector('.change')

changeCanvasBtn.addEventListener('click', (e) => {
  cells.forEach((cell) => (cell.style.backgroundColor = 'aqua'))

  let canvasSize = prompt('Enter the canvas size (max 100)')

  if (canvasSize > 100) canvasSize = 100

  generateCanvas(canvasSize)
})

generateCanvas(16)
