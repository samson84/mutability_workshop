const assert = require('assert').strict

/**
 * Adds a quantity property to a product. If the quantity exists in the product,
 * it can be overwritten.
 * 
 * @param {object} product: This object can have any arbitrary properties
 * @param {number} quantity: This value should be added to the product 
 * @returns {object} The properties are the same as the original product,
 *  but a quantity property is added to them with a qiven value from the quantity
 *  param.
 */
function addQuantity(product, quantity) {
    // TODO: Correct the function body.
    product.quantity = quantity
    return product
}

// Help, if you get stucked:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// The lines below test your solution, do not touch them!

function test1() {
    let product = {
        producer: 'Royal Canin',
        name: 'Kibbles 37',
        type: 'dry',
        recommnededAgeMin: 1,
    };
    let quantity = 4;
    let expectedResult = {
        producer: 'Royal Canin',
        name: 'Kibbles 37',
        type: 'dry',
        recommnededAgeMin: 1,
        quantity: 4
    }

    let current = addQuantity(product, quantity)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the quantity key is not added properly to the product.')
    assert.equal(current !== product, true, '❌ Ooops, it is not a new object')    
}
test1()

function test2() {
    let product = {
        producer: 'Royal Canin',
        name: 'Kitten',
        weightInGramm: 80
    };
    let quantity = 2;
    let expectedResult = {
        producer: 'Royal Canin',
        name: 'Kitten',
        weightInGramm: 80,
        quantity: 2
    }

    let current = addQuantity(product, quantity)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the quantity key is not added properly to the product.')
    assert.equal(current !== product, true, '❌ Ooops, it is not a new object')    
}
test2()

console.log('✅🐱 Congratulation, it is passed.')