const assert = require('assert').strict

// Modify the functions below to always return immutable data structures

function createCakeBase() {
    return {}
}

function prepareLayers(cake) {
    cake.layers = []
    return cake
}

function addLayers(cake, layers) {
    for(let i = 0; i < layers.length; i++) {
        cake.layers.push(layers[i])
    }
    return cake;
}

function addCandles(cake, birthYear) {
    const now = new Date();
    cake.candles = now.getFullYear() - birthYear;
    return cake;
}

// We prepare two cakes here, one for Cirmi and
// one for Bütyök. This example shows why useful
// to stick to immutable data structures in a complex
// code.

// Do not modify the lines below

let cake = createCakeBase();
let prepared = prepareLayers(cake);

let chocholateCake = addLayers(prepared, [
    'sponge cake',
    'chocolate cream',
    'sponge cake',
    'chocolate dressing'
]);

let fruitCake = addLayers(prepared, [
    'sponge cake',
    'strawberries',
    'whipped cream'
]);

let butyokCake = addCandles(fruitCake, 2021)

let cirmiCake = addCandles(chocholateCake, 2007);

// These assertions must pass

assert.equal(cake !== prepared, true, '❌ Ooops, the prepareLayer fucntion does not return a new cake.')
assert.equal(prepared !== chocholateCake, true, '❌ Ooops, the addLayers function does not return a new object.')
assert.equal(prepared !== fruitCake, true, '❌ Ooops, the addLayers function does not return a new object.')
assert.equal(butyokCake !== fruitCake, true, '❌ Ooops, the addCandles function does not return a new object.')
assert.equal(cirmiCake !== chocholateCake, true, '❌ Ooops, the addCandles function does not return a new object.')

assert.deepStrictEqual(butyokCake, {
    candles: 1,
    layers: [
        'sponge cake',
        'strawberries',
        'whipped cream'
    ]
})

assert.deepStrictEqual(cirmiCake, {
    candles: 5,
    layers: [
        'sponge cake',
        'chocolate cream',
        'sponge cake',
        'chocholate dressing'
    ]
})

console.log('✅🐱 Congratulation, it is passed.')
