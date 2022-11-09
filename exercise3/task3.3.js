const assert = require('assert').strict

/**
 * Adds a new prey to the aCat.preys array.
 * 
 * @param {object} aCat: A {name: <string>, age: <number>, preys: <array>} 
 *   shaped object. 
 * @param {string} prey: A name of new prey.
 * @returns {object}: returns a new aCat object, where the prey param
 *   is appended to the end of the cat's prey list.
 */
function catchPrey(aCat, prey) {
    // TODO: correct the function body
    let newCat = { ...aCat }
    newCat.preys.push(prey)
    return newCat
}

// Help, if you get stucked:
// - 

// The lines below test your solution, do not touch them!

function test1() {
    let aCat = {
        name: 'Bütyök',
        age: 1,
        preys: ['bird']
    };
    let prey = 'mouse';
    let expectedResult = {
        name: 'Bütyök',
        age: 1,
        preys: ['bird', 'mouse']
    }

    let current = catchPrey(aCat, prey)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== aCat, true, '❌ Ooops, it is not a new object.')    
    assert.equal(current.preys !== aCat.preys, true, '❌ Ooops, the array is not new.')
}
test1()


console.log('✅🐱 Congratulation, it is passed.')
