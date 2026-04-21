import './App.css';
import PassFunctionAsProps from './PassFunctionAsProps';

function App() {

  function getData() {
    alert('Hello How are you!')
  }
  return (
    <>
      <h1>Hello!</h1>
      <PassFunctionAsProps data={getData} />


    </>
  )
}
export default App
