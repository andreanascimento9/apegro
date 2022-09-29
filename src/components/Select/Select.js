import axios from 'axios';
import {useEffect, useState} from 'react';

import chucknorris from '../../images/chucknorris.png';


function Select(){

  const [category, setCategory] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")
  const [currentJoke, setCurrentJoke] = useState("Select the category")

  const getJoke = () => {
    if (currentCategory === "") {
      axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
        setCurrentJoke(res.data.value)
        // console.log("ok")
      })
    } else {
      axios
        .get(
          `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
        )
        .then((res) => {
          setCurrentJoke(res.data.value)
          // console.log('n é vazio')
        })
    }
  }

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      setCategory(res.data)
    })
  }, [])
     
      const categoriesAll = category.map((fact, i) => 
        <option className='capitalize' key={i} value={fact}>{fact}</option>
      )

    return(
        <>
        <div className='p-10'>

            <div className='bg-gray-100 p-8 shadow-sm rounded-xl'>
                <img className='w-32 h-32 rounded-full mx-auto' src={chucknorris} />
                <div className='pt-6 text-center space-y-4'>
                    <div className='block mb-2 text-sm font-medium text-black-900 dark:text-black-400' >
                        {currentJoke}
                    </div>
                </div>

            </div>

            <select 
            onChange={async (e) => {
              getJoke();
              const selectedCategory = e.target.value;
              setCurrentCategory(selectedCategory);
            }} 
            
            id="categories" className="bg-gray-50 mt-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                
                <option selected>Choose a fact</option>

                {categoriesAll} 

            </select>
            {category}

        </div>
        </>
    )
}

export default Select