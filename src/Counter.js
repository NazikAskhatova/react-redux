import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

function Counter() {
    const [counter, setCounter] = useState(0);

    function onIncrement() {
        setCounter(counter + 1)
    }
    function onDecrement() {
        setCounter(counter - 1)
    }
  

  return (
      <div className="Counter">
        <CounterDisplay counter={counter}/>  
        <CounterControls onDecrement={onDEcrement} onIncrement={onIncrement}/>
      </div>
      
  )
}

  export default Counter;

  