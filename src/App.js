import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Test } from "./components/Test";

function App() {
  const [isToggled, setIsTogged] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsTogged(isToggled)}>Toggled</button>
      {isToggled && <Test />}
      {isToggled ? <Test /> : null}

      <Test />
    </div>
  );
}

export default App;

// is Toggled set to true
//  {isToggled && <Test />} set to true we want to return the test component
// {isToggled ? <Test /> : null} this is similar if true return component else returns nothing
// https://www.youtube.com/watch?v=4oCVDkb_EIs
