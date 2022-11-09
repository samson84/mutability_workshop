// Example: Nested objects

const cirmi = {
    name: 'Cirmi',
    age: 4,
    feeding: {
        kibblesInGramm: 50,
        wetFoodInGramm: 80,
    }
}

const cirmi2 = {
    ...cirmi
}

cirmi2.feeding.kibblesInGramm = 30
cirmi2.age = 5

console.log('cirmi.feeding', cirmi.feeding)
console.log('cirmi2.feeding', cirmi2.feeding)
console.log('cirmi.feeding === cirmi2.feeding', cirmi.feeding === cirmi2.feeding)
console.log('cirmi.age', cirmi.age)
console.log('cirmi2.age', cirmi2.age)

// Example: Shopping cart, cart items are objects within an array

const shoppingCart = [
    {name: 'Kibbles', price: 10, quantity: 2},
    {name: 'Litter', price: 20, quantity: 1}
]

const shoppingCart2 = [...shoppingCart]
shoppingCart2[1].quantity = 2

console.log('shoppingCart[1]', shoppingCart[1])
console.log('shoppingCart2[1]', shoppingCart2[1])
console.log('shoppingCart[1] === shoppingCart2[1]', shoppingCart[1] === shoppingCart2[1])