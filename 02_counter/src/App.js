import { useState } from 'react';
import './App.css';



//let counter = 15



function App() {

let [counter , setCounter] = useState(15) //always use the hooks here top level of a function component

let addcount = ()=>{
      if (counter <20){ counter = counter + 1}
       setCounter(counter)
       console.log(counter)
}

let removecount = ()=>{
  if (counter>0){counter = counter - 1}
  setCounter(counter)
  console.log(counter)
}
  return (
    <>
    <h1>Anmol's Chai</h1>
    <h2>count is : {counter}</h2>
    <button onClick={addcount}>Add Count {counter} </button>
    <br/>
    <button onClick={removecount}>Remove Count {counter} </button>
    </>
  );
}

export default App;
