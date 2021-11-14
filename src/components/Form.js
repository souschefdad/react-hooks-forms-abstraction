import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    admin: false,
  });


  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.name;

    if(event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }


  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstname: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastname: event.target.value,
  //   });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="firstName"
      value={formData.firstname} 
      onChange={handleChange} 
    
      />
      <input 
      type="text" 
      name="lastName"
      value={formData.lastname} 
      onChange={handleChange} 
      
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
