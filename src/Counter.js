import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";
// import { useState } from "react";

function Counter() {

    return <div className="Counter">
<CounterDisplay/>
<CounterControls/>
    </div>
    // const [counter, setCounter] = useState(0);

    // function onIncrement() {
    //     setCounter(counter + 1)
    // }
    // function onDecrement() {
    //     setCounter(counter - 1)
    // }
  

//   return (
//       <div className="Counter">
//         <CounterDisplay /> 
//         {/* /* counter={counter}  */ */}onDecrement={onDecrement} onIncrement={onIncrement}
//         {/* <CounterControls onDecrement={onDecrement} onIncrement={onIncrement}/> */}
//       </div>
      
//   )
}

  export default Counter;

  