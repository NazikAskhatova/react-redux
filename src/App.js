
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Name from "./Name";


function App() {
  const name = useSelector(store => store.name.value)
  return (
    <div className="App">
   <Counter/>
   <hr/>
   <Name/>
   <h2>Hello {name}</h2>
    </div>
  );
}
  // {/* <Counter />  */}
export default App;
