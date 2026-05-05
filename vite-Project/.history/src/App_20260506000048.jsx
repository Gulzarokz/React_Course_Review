import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MyRoutes/Home';
import About from './MyRoutes/About';











function App() {
  // const [count, setCount] = useState(0)

  // function getData() {
  //   alert('Hello How are you!')
  // }
  return (
    <>
      <h1>Hello! app.js file</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>













    </>
  )
}
export default App
