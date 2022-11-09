// Example 1, shopping cart

let shoppingCart = ['Litter', 'Kibbles', 'Cat Toy']
let otherShoppingCart = ['Litter', 'Kibbles', 'Cat Toy']

console.log('shoppingCart === otherShoppingCart', shoppingCart === otherShoppingCart)
console.log('shoppingCart', shoppingCart)
console.log('otherShoppingCart', otherShoppingCart)

// Example 2, adding things to the shopping cart

let oldShoppingCart = ['Litter', 'Kibbles']
let updatedShoppingCart = oldShoppingCart
updatedShoppingCart.push('Cat Toy')

console.log('oldShoppingCart === updatedShoppingCart', oldShoppingCart === updatedShoppingCart)
console.log('oldShoppingCart', oldShoppingCart)
console.log('updatedShoppingCart', updatedShoppingCart)