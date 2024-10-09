import Output from "./Output.js";
import { useState } from "react";

const Greeting = () => {
  const [changetext, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changetext && <Output>It's good to see you!</Output>}
      {changetext && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};
export default Greeting;
