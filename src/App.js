import './App.css';

import { useState } from 'react';


import Card from './components/Card/Card';
import Button from './components/Button/Button';

function App() {

  const [seed, setSeed] = useState(1);
  const reset = () => {
         setSeed(Math.random());
  }
 
  return (  
    <>
    <Card key={seed}/>
    <Button title="Another fact of Cabra" />
    </>

  );

}

export default App;
