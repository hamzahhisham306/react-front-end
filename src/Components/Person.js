import axios from "axios";
import React, { useState } from "react";


function Person(){
  const [name, setName]=useState('');
  const [gender, setGender]=useState('');
  const [age, setAge]=useState('');
  const [pluseAge, setPluse]=useState('');
  const [show, setShow]=useState(true);
    const handlerName=(e)=>{
        e.preventDefault();
      setName(e.target.value);
    }
    const handlerGender=(e)=>{
      e.preventDefault();
      setGender(e.target.value);
    }
    const handlerAge=(e)=>{
      e.preventDefault();
      setAge(e.target.value);
    }
    const postRequer= async(name, gender, age)=>{
     const res=await axios.post(`https://express-person.herokuapp.com/person?name=${name}&gender=${gender}&age=${age}`);
     console.log(res.data);

     setPluse(res.data);
    }
    const handlerSumit=(e)=>{
      e.preventDefault();
      postRequer(name, gender,age);
      setShow(true)
    }
    return(
        <div style={{paddingBottom:'55px'}}> 
          <form onSubmit={handlerSumit} >
            <label>Enter Name: </label>
            <input data-testid='Name-input' onChange={handlerName}  type='text' name="Name" placeholder="Name"/><br/><br/>
            <label>Enter Gender: </label>
            <input data-testid='Gender-input' onChange={handlerGender} type='text' name="Gender"  placeholder="Gender"/><br/><br/>
             <label>Enter age: </label>
             <input data-testid='Age-input' min='0' max='120' onChange={handlerAge} type='number' name="Age" placeholder="Age"/><br/><br></br>
             <button data-testid='Submit' type="submit">Sumbit</button>
          </form>
          <div>
{show&&
              <>
            <h2 data-testid='Name'>my name is {name}</h2>
            <h2 data-testid='Gender'>I am {gender}</h2>
            <h2 data-testid='Age'>I am {age}</h2>
            <h2 data-testid='fiveAge'>After Add five {pluseAge}</h2>
            </>
}
          </div>
        </div>
    )
}


export default Person;