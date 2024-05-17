import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actionType } from "./redux/action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.user);
  // const value = useSelector((state) => state);
  // direct toggle use karenge to error ayega unlike we can use {state.user}
  const handleIncrease = () => {
    dispatch(actionType.increseByone());
  };
  const handleDecrease = () => {
    dispatch(actionType.decreaseByOne());
  };
  const handleFetch = ()=>{
    dispatch({type:'fetch'})
  }

  // let fetchdata=async()=>{
  //   const response = await fetch('https://dummyjson.com/products')
  //   const data=await response.json()
  //   console.log(data)
  // }

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);

  return (
    <>
      <h1>Redux react</h1>
      <button onClick={handleIncrease}>increse</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleFetch}>Fetch to do</button>
      {
        value && <h2> devilal</h2>
      }
    </>
  );
}

export default App;
