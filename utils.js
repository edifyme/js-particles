const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

function randInt(min=0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

export { randInt, distance, colors };