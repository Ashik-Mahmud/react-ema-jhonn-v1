import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Shop from '../Shop/Shop'

const Home = () => {

    const [products, setProducts] = useState([])
    const [countCarts, setCountCarts] = useState(0)

    useEffect(()=>{
        fetch('https://ema-jhon-api.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
        
    },[])
  

  return (
    <>
      <Header countCarts={countCarts} />
      <Shop products={products} countCarts={countCarts} setCountCarts={setCountCarts} />
    </>
  )
}

export default Home