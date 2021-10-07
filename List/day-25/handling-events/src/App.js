import "./App.css";
import { useState } from "react";

import ClickHeading from "./ClickHeading";
import ClickCounter from "./ClickCounter";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const clickHandler = (e) => setNumClicks(numClicks + 1);

  return (
    <div>
      <ClickHeading numClicks={numClicks} />
      <ClickCounter numClicks={numClicks} onClick={clickHandler} />
    </div>
  );
}

export default App;
