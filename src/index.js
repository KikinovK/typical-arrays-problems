
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0
  }

  return array.reduce((minValue, curentValue) => minValue > curentValue ? curentValue : minValue, 0)
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0
  }

  return array.reduce((maxValue, curentValue) => maxValue < curentValue ? curentValue : maxValue, 0)
}

exports.avg = function avg (array) {

  if (!array || array.length === 0) {
    return 0
  }

  return array.reduce((sum, curentValue) => sum + curentValue, 0) / array.length
}
