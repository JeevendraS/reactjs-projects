import React, { useState } from "react";
function App(){
  let [marks ,setMarks] = useState(89)
  return (
    <div>
      <h1>Hello my Name is Jeevendra singh {marks}</h1>
      <button onClick={()=>{
        setMarks(99)
      }} >update</button>
    </div>
  );
}

export default App
