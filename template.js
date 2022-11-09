const assert = require('assert').strict

// TASK:
//
//  Arguments: 
//     product:
//  Return: 
// 
function someFunction(product, quantity) {
    // TODO: fill the function body
}

// Help, if you get stucked:
// - 

// The lines below test your solution, do not touch them!

function test1() {
    let input = {
    };
    let quantity = 4;
    let expectedResult = {
    }

    let current = someFunction(input, quantity)

    assert.equal(current !== input, true, '❌ Ooops, it is not a new object.')    
    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
}
test1()


console.log('✅🐱 Congratulation, it is passed.')
