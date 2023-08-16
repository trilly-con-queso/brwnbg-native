import React from 'react';
import { useState } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

const App = () => {

const [result, setResult] = useState('Recipe')

return (
  <div className='container'>
    <div className='row d-flex align-items-center' id='header-row'>
      <Header setResult={setResult} />
    </div>
    <div className='row d-flex' id='body-row'>
      <Body result={result}/>
    </div>
    <div className='row'>
    </div>
  </div>
)

}

export default App;