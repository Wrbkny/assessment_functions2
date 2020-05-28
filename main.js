

function add(x, y) {
    const result = x + y
    return result
}

console.log('my add function', add(6, 8))



//Per Zachs recommendation:

//function multiply(x, y) {
//Create a placeholder variable here
//for loop goes here, make it go until y is met {
//placeholder variable = add(x, placeholder)
//}
//return placeholder variable
//}
//multiply(5, 3)

function multiply(x, y) {
    let product = 0

    for (let counter = 0; counter < y; counter += 1) {
        console.log('counter')
        product = add(x, product)
        console.log('product ', product)
    }

    return product
}

console.log('my multiplaction function', multiply(9, 7))

            