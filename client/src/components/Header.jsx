import React from 'react';
import paperBag from '../assets/paperbag-large.png'
import Form from './Form.jsx';

const Header = ( { setResult } ) => (
<div className='header'>
  <div className='row text-center'>
    <div id='header-text'>
      <span className='h1'>brwnBg</span>
      <img id='brown-bag' src={paperBag} alt="Paper Bag"/></div>
      <Form setResult={setResult}/>
     </div>
</div>

)

export default Header;