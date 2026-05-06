import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './MyRoutes/Home';
import About from './MyRoutes/About';
import Navbar from './MyRoutes/Navbar';
import PageNotFound from './MyRoutes/PageNotFound';
import Employee from './MyRoutes/Employee';
import Contact from './MyRoutes/Contact';
import SerachParams from './MyRoutes/SerachParams';











function App() {
  // const [count, setCount] = useState(0)

  // function getData() {
  //   alert('Hello How are you!')
  // }
  return (
    <>
      <h1>Hello! app.js file</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/params' element={<SerachParams />} />
          {/* <Route path='/*' element={<PageNotFound />} /> */}
          {/* <Route path='/employee/:name/:age' element={<Employee />} />
          <Route path='/*' element={<Navigate to="/home" />} /> */}
        </Routes>
      </BrowserRouter>













    </>
  )
}
export default App
