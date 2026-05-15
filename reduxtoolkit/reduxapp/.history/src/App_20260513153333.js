import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <>
      <h1>Welcome to React redux</h1>
      <a className="plus" title='increment' ><span>+</span></a>
      <input className="count" type="text" value="0" />
      <a className="minus" title='decrement' ><span>-</span></a>

    </>
  )
}

export default App

