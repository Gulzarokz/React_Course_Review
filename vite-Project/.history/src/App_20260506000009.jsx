import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MyRoutes/Home';











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
        </Routes>
      </BrowserRouter>













    </>
  )
}
export default App
