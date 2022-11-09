const assert = require('assert').strict

/**
 * Adds a new feeding with a given name and ammount to the feeding property
 * of the cat.
 * 
 * @param {object} aCat: {name: <string>, age: <number>, feeding: <object>} shaped.
 * @param {string} feedingName: A new feeding name. It will be added as a property 
 *   of aCat.feeding 
 * @param {number} amount: The value for the feedingName
 * @returns a new object where the feeding property's object is extended with
 *   the new feedingName and its ammount.
 */
function addFeeding(aCat, feedingName, amount) {
    // TODO: correct the function body
    let aNewCat = {
        ...aCat
    }
    aNewCat.feeding[feedingName] = amount

    return aNewCat
}

// Help, if you get stucked:
// - 

// The lines below test your solution, do not touch them!

function test1() {
    let aCat = {
        name: 'Cirmi',
        age: 4,
        feeding: {
            kibblesInGramm: 40
        }
    };
    let feedingName = 'wetFoodInGramm';
    let amount = 80
    let expectedResult = {
        name: 'Cirmi',
        age: 4,
        feeding: {
            kibblesInGramm: 40,
            wetFoodInGramm: 80
        }
    };

    let current = addFeeding(aCat, feedingName, amount)

    assert.deepStrictEqual(current, expectedResult, '❌ Ooops, the expected result does not match.')
    assert.equal(current !== aCat, true, '❌ Ooops, it is not a new object.')    
    assert.equal(current.kibbles !== aCat.kibbles, true, '❌ Ooops, the nested object is not new.')
}
test1()

console.log('✅🐱 Congratulation, it is passed.')
