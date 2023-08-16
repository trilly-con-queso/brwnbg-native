import React from 'react';
import { useState } from 'react';
import Button from './Button.jsx';

const Form = ( { setResult } ) => {

const [dishInput, setDishInput] = useState('');
const [btnToggle, setBtnToggle] = useState(true)

async function onSubmit(e) {
  e.preventDefault();
  setDishInput('');
  try {
    const response = await fetch("http://localhost:3000/api/dish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dish: dishInput }),
    });


  const data = await response.json();
  if (response.status !== 200) {
    throw data.error || new Error(`Request failed with status ${response.status}`);
  }
  setBtnToggle(true);
  setResult(data.result);

  } catch(error) {
    console.error(error);
    alert(error.message);
  }
};

return (
  <div className='d-flex justify-content-center'>
    <form onSubmit={(e) => {onSubmit(e); setBtnToggle(false)}}>
      <div className="mb-3">
        <input type="text" className="form-control" id="dishInput" aria-describedby="dish" value={dishInput} onChange={(e) => {setDishInput(e.target.value)}}/>
        <div id="dishHelp" className="form-text d-flex justify-content-center">What's cookin' good lookin?</div>
      </div>
      {(btnToggle) ? <input className='btn btn-success' type='submit' value='Bag it!' /> : <button className="btn btn-success" type="button" disabled>
  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>}
    </form>
    </div>
)

};

export default Form;
