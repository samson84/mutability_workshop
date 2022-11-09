import { useState } from "react";

function App() {
  const [cat, setCat] = useState({name: 'Bütyök', age: 1})

  // Correct the function to be sure that updated cat is
  // a new object and does not mutate the original cat to
  // make this react component works properly.
  function handleCelebrate() {
    let updatedCat = cat;
    updatedCat.age = cat.age + 1

    // When setCat is called, React is comparing the previous 
    // and the new state with ===. If the object is mutated
    // and the references are the same, it does not trigger 
    // an update on the component
    setCat(updatedCat)
  }

  return (
    <div style={{backgroundColor: 'lightcyan', padding: '1rem'}}>
      <button onClick={handleCelebrate}>Celebrate Birthday</button>
      <p>{`${cat.name} is ${cat.age} years old.`}</p>
      <p style={{width: '12rem', fontSize: '2rem'}}>
        {Array.from(Array(cat.age)).map(function() { return '🕯' })}
      </p>
    </div>
  );
}

export default App;
