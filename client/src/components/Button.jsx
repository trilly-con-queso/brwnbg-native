import React from 'react';
import { useState } from 'react';

const Button = ( { btnClass, btnName, onClick } ) => {

return (

  <div className='d-flex flex-grow-1 justify-content-center'>
    <button onClick={onClick} type="button" className={`btn ${btnClass}`}>{btnName}</button>
  </div>

)

}

export default Button;