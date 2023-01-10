import { useState } from 'react';
import './FormInput.css';

const FormInput = () => {
const [userInput, setUserInput] = useState('')
const [surInput, setSurInput] = useState({
  surname: ''
})
const [passInput, setPassInput] = useState({
  passInput: ''
})

const userChangHandler = (event) => {
  setUserInput(event.target.value)
}


const surChangeHandler = (event) => {
  const currentInput = event.target.name
  setSurInput({
    ...surInput,
    [currentInput]: event.target.value
  })
}

const passChangeHandler = (event) => {
  setPassInput((prevState) => {
    return {
      ...prevState,
      passInput: event.target.value
    }
  })
}


const submitHandler = (event) => {
  event.preventDefault()
  console.log(userInput);
  console.log(surInput.surname);
  console.log(passInput.passInput);
}


  return (
    <form onSubmit={submitHandler} className="form">
      <div className='inputs'>
        <div className='input'>
          <label>User name:</label>
          <input type="text" onChange={userChangHandler} />
        </div>
        <div className='input'>
          <label>Surname :</label>
          <input name="surname" type="text" onChange={surChangeHandler} />
        </div>
        <div className='input'>
          <label> Password:</label>
          <input type="password" onChange={passChangeHandler} />
        </div>
      </div>
      <div className='btn'>
        <button type="submit" >submit</button>
      </div>
    </form>
  );
}

export default FormInput;
