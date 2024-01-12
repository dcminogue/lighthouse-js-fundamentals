const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0 ) {
    return undefined;
  }
  const rectangle = length * width;
  return rectangle 
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0 ) {
    return undefined;
  }
  const triangle = base * height / 2
  return triangle
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  }
  const circle = Math.PI * radius**2
  return circle
}


