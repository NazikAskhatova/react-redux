
function CounterControls({ onIncrement, onDecrement, onReset }) {
    return (
      <div className="CounterControls">
        <button onClick={onIncrement}></button>
        <button onClick={onDecrement}></button>
        <button onClick={onReset}></button>
      </div>
    );
  }
  
  export default CounterControls;
  