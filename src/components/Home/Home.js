import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data => setCart(data))     

    },[])
    return (
      <div className="home-container">
          {
              cart.map(cert => <Cart seeMoreButton={true} cart={cert}></Cart>)
          }
      </div>
    );
  }

  
export default Home;