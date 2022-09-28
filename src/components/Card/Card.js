
import chucknorris from '../../images/chucknorris.png';

import axios from 'axios';
import {useEffect, useState} from 'react';

function Card(){

    useEffect(() => {
        getFacts();
      }, []);
    
      const [facts, setFacts] = useState([]);
    
      const getFacts = async () => {
        try {
          const res = await axios.get('https://api.chucknorris.io/jokes/random');
          console.log(res.data);
          setFacts(res.data);
        } catch(err){
          console.log(err.message);
        }
      }

    return(

    <>
    <div className='p-10'>
            <div className='bg-gray-100 p-8 shadow-sm rounded-xl'>
                <img className='w-32 h-32 rounded-full mx-auto' src={chucknorris} />
                <div className='pt-6 text-center space-y-4'>
                    <div className='text-lg' id={facts.id}>
                        {facts.value}
                    </div>
                </div>

            </div>
        </div>
        </>

    )
}

export default Card