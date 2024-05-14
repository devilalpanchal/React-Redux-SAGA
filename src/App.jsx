
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  actionType } from './redux/action'
import { useEffect } from 'react'



function App() {
const dispatch=useDispatch()
const value=useSelector(state=>state.user)
console.log(value)
const handleIncrease=()=>{
dispatch(actionType.increseByone())
}
const handleDecrease=()=>{
  dispatch(actionType.decreaseByOne())
}

// let fetchdata=async()=>{
//   const response = await fetch('https://dummyjson.com/products')
//   const data=await response.json()
//   console.log(data)
// }

useEffect(()=>{
  dispatch({type:'FETCH_DATA'})

},[])


  return (
    <>
     <h1>Redux react</h1>
<button onClick={handleIncrease}>increse</button>
<button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default App
