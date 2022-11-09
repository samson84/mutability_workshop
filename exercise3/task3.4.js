const assert = require('assert').strict

/**
 * Update all array item's quantity property with a given value.
 * 
 * @param {array} products: An array of {name: <string>, quantity: <number>} shaped obects  
 * @param {number} quantity: The quantity to update
 * @returns {object} a new object, identitcal to the products, but all
 *  items quantity is changed to the quantity param.
 */
function updateAllQuantity(products, quantity) {
    // TODO: correct the function body
    let newProducts = [...products]
    newProducts.forEach(function (_product, index){
        newProducts[index].quantity = quantity
    })
    return newProducts
}

// Help, if you get stucked:
// - 

// The lines below test your solution, do not touch them!

function test1() {
    let products = [
        { name: 'Litter', quantity: 4 },
        { name: 'Kibbles', quantity: 5 }
    ];
    let quantity = 2;
    let expectedResult = [
        { name: 'Litter', quantity: 2 },
        { name: 'Kibbles', quantity: 2 }
    ];

    let current = updateAllQuantity(products, quantity)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== products, true, '❌ Ooops, it is not a new object.')
    assert.equal(current[0] !== products[0], true, '❌ Ooops, the first element is not new.')
    assert.equal(current[1] !== products[1], true, '❌ Ooops, the second element is not new.')
}
test1()


console.log('✅🐱 Congratulation, it is passed.')
