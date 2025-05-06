import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let details = {
    username : 'Anmol',
    age : 22
  }
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Anmol's Tailwind</h1>
      <Card username='Queen Band Live' btnText='Book Tickets'/>
      <Card username='Beatles Live' btnText= 'Book Now'/>
    </>
  )
}

export default App
