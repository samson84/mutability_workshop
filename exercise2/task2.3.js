const assert = require('assert').strict

/**
 * Adds a new item to the shopping cart.
 * 
 * @param {array} shoppingCart: An array of strings. 
 * @param {string} item: A new item to append to the array. 
 * @returns {array}: An array of strings, the original shopping cart's 
 *   items plus the new item at the end.
 */
function addItem(shoppingCart, item) {
    // TODO: Correct the function body.
    shoppingCart.push(item)
    return shoppingCart
}

// Help, if you get stucked:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// The lines below test your solution, do not touch them!

function test1() {
    let cart = ['Kibbles', 'Cat Toy']
    let item = 'Litter';
    let expectedResult = ['Kibbles', 'Cat Toy', 'Litter']

    let current = addItem(cart, item)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== cart, true, '❌ Ooops, it is not a new object.')    
}
test1()

function test2() {
    let cart = []
    let item = 'Litter';
    let expectedResult = ['Litter']

    let current = addItem(cart, item)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== cart, true, '❌ Ooops, it is not a new object.')    
}
test2()


console.log('✅🐱 Congratulation, it is passed.')
