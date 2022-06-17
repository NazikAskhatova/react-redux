import { useState } from "react";
import { useDispatch } from "react-redux";


function CounterControls() {
    const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="CounterSet">
<input type="number"
value={number}
onChange={({ target }) => setNumber(target.value)} />

<button onClick={() => dispatch({ type: "counter/set", payload: number })}>set</button>
    </div>
  );
}

export default CounterControls;