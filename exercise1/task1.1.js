const assert = require('assert').strict

/**
 * Celebrate a cat's birthay. This function increase the
 * age property by one.
 * 
 * @param {object} aCat: A {name: <string>, age: <number>} shaped object.
 * @returns {object} A {name: <string>, age: <number>} shaped object, where
 *  the age is increased by one.
 */
function celebrateBirthDay(aCat) {
    // TODO: Fill the function body

}

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

    let current = celebrateBirthDay(input)
    console.log('input === current ?', input === current)
    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
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

    let current = celebrateBirthDay(input)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
}
test2()


console.log('✅🐱 Congratulation, it is passed.')