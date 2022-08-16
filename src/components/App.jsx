import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  let fileReader;

  function extraction(commaString){
    let pinCode=[];let a=0,start=0;let extract;
    const userInput=commaString+",";
    let arr=[...userInput];
    for(var i=0;i<arr.length;i++){
        if(arr[i]===','){
            
            pinCode[a]=userInput.substring(start,i).trim();
            
            a++;
            start=i+1;
        }
        }
    
    
    console.log(pinCode);
  }

const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      extraction(text);
    };
     reader.readAsText(e.target.files[0]);
  };

  function handleChange1(event) {
    
    setName(event.target.value);
  }

  function handleClick1(event) {
    console.log(name);
    extraction(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      
      <form onSubmit={handleClick1}>
        <input
          onChange={handleChange1}
          type="text"
          placeholder="Enter cities"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
      <input type="file"
        name="myFile"
        onChange={showFile} />
    </div>
  );
}

export default App;
