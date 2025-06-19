import React from "react";
import { useState } from "react";

const FromCreate = ({ onCreate }) => {
  // const [name , setName] = useState('');
  const [formData, setFormData] = useState(
    {
      name: "",
      lastname: "",
    },
  );

  const handleChange = (event) => {
    // setName(event.target.value);

    const {name, value} = event.target;

    setFormData(prev =>({
      ...prev,
      [name]:value
    }
    ))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formData);
    setFormData({
      
        name:"",
        lastname:""
      
    });
  };

  // console.log(name);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input name="name" value={formData.name} onChange={handleChange}></input>
        <label> last name</label>
        <input name="lastname" value={formData.lastname} onChange={handleChange}></input>

        <button>cretae</button>
      </form>
    </div>
  );
};

export default FromCreate;
