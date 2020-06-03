function add(x, y) {
  const result = x + y
  return result
}

console.log('my add function', add(6, 8))


function multiply(x, y) {
  let product = 0

  for (let counter = 0; counter < y; counter += 1) {
    console.log('counter')
    product = add(x, product)
    console.log('product', product)
  }

  return product
}

console.log('my multiply function', multiply(6, 4))


function power(x, n) {
  let result = 1

  for (let counter = 0; counter < n; counter += 1) {
    console.log('counter')
    result = multiply(x, result)
    console.log('result', result)
  }

  return result

}
console.log('my power function', power(3, 4))

function factorial (x) {
let result = 1

for (let counter = 1; counter<=x; counter+=1) {
  console.log(counter)
  result= multiply (counter, result)
  console.log('result',result)
}

return result

}

console.log('my factorial function', factorial (3))


