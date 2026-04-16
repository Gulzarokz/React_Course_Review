import './App.css';
import Props from './Props';
import StateInFunctionalComponent from './stateInFunctionalComponent';

function App() {

  return (
    <>
      <h1>Hello, Vite!</h1>
      {/* <StateInFunctionalComponent /> */}
      <Props name={"Gulzar khan"} gmail={"Gulzar123@gamil.com"} info={{ salary: 6000, mobile: "Iphone" }} />

    </>
  )
}

export default App
