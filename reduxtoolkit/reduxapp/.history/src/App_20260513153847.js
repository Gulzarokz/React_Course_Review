import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './Actions/Action';
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to React redux</h1>
      <a onClick={() => dispatch(incNumber())} className="plus" title='increment' ><span>+</span></a>
      <input className="count" type="text" value="0" />
      <a onClick={() => useDispatch(decNumber())} className="minus" title='decrement' ><span>-</span></a>

    </>
  )
}

export default App

