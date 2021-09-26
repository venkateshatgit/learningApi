import React, {useState, useEffect} from 'react'
import axios from 'axios'
import  './index.css'
import BBlogo from './image/BBlogo.jpg'
import Characters from './components/Characters'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    const fetchApi = async() =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
      // console.log(isLoading, items)
    } 

    fetchApi()
  }, [])

  return (
    <div className="container">
      <div className="logo">
        <img src={BBlogo}/>
      </div>

      <Characters isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
