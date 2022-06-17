import { useDispatch } from "react-redux";

function CounterControls() {
  const dispatch = useDispatch();
  return (
    <div className="CounterControls">
      <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "counter/reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
      
     
    </div>
  );
}
// function CounterControls({ onIncrement, onDecrement, onReset }) {
//     return (
//       <div className="CounterControls">
//         <button onClick={onIncrement}></button>
//         <button onClick={onDecrement}></button>
//         <button onClick={onReset}></button>
//       </div>
//     );
//   }

export default CounterControls;
