import { useState } from 'react';
import './App.css';
import UseEffectProps from './UseEffectProps';



function App() {
  const [count, setCount] = useState(0)

  // function getData() {
  //   alert('Hello How are you!')
  // }
  return (
    <>
      <h1>Hello! app.js file</h1>
      <UseEffectProps data={count} />



    </>
  )
}
export default App
