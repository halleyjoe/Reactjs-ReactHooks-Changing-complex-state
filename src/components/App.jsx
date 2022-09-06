import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({fName: "",lName: ""});
  
  function handleClick(event) {
    const {value, name} = event.target;

    //-----DESTRUCTURING-----//
   
    /*setFullName(prevValue => {
      
      if (name === "fName") {
        return {fName: value,
        lName: prevValue.lName};
      } else if (name === "lName") {
        return {fName: prevValue.fName,
        lName: value};
    }
  })*/

  //----SPREAD OPERATOR-----//

  setFullName(prevValue => {
    return {
      ...prevValue,
      [name]: value
    }
  })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleClick} name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange={handleClick} name="lName" placeholder="Last Name" value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
