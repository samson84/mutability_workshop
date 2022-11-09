const assert = require('assert').strict

/**
 * Celebrate a cat's birthay. This function increase the
 * age property by one.
 * 
 * @param {object} aCat: A {name: <string>, age: <number>} shaped object.
 * @returns {object} A {name: <string>, age: <number>} shaped object, where
 *  the age is increased by one. This should be a new object.
 */
 function safeCelebrateBirthDay(aCat) {
    // TODO: correct the function body
    aCat.age = aCat.age + 1
    return aCat
}

// Help, if you get stucked:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// The lines below test your solution, do not touch them!

function test1() {
    let input = {
        name: 'Bütyök',
        age: 1
    };
    let expectedResult = {
        name: 'Bütyök',
        age: 2
    }

    let current = safeCelebrateBirthDay(input, quantity)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== input, true, '❌ Ooops, it is not a new object')    
}
test1()

function test2() {
    let input = {
        name: 'Bütyök',
        age: 4
    };
    let expectedResult = {
        name: 'Bütyök',
        age: 5
    }

    let current = safeCelebrateBirthDay(input, quantity)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== input, true, '❌ Ooops, it is not a new object')    
}
test2()

console.log('✅🐱 Congratulation, it is passed.')