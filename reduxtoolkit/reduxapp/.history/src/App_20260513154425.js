import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './actions/Action.js';
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  function incHandler() {
    dispatch(incNumber());
  }
  function decHandler() {
    dispatch(decNumber());
  }
  return (
    <>
      <h1>Welcome to React redux</h1>
      <a onClick={incHandler} className="plus" title='increment' ><span>+</span></a>
      <input className="count" type="text" value={myState} />
      <a onClick={decHandler} className="minus" title='decrement' ><span>-</span></a>

    </>
  )
}

export default App

