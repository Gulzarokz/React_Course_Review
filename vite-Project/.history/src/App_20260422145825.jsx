import { useState } from 'react';
// import UseEffectHook from './UseEffectHook';
import UseEffectWIthCondition from './UseEffectWIthCondition';




function App() {
  const [count, setCount] = useState(0)

  // function getData() {
  //   alert('Hello How are you!')
  // }
  return (
    <>
      <h1>Hello! app.js file</h1>
      {/* <UseEffectProps data={count} />
      <button onClick={() => setCount(count + 1)}>counter</button>
 */}
      <UseEffectWIthCondition />


    </>
  )
}
export default App
