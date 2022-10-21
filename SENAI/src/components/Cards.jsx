import React, { useState, useEffect } from "react";
import '../styles/cards.css'
import Robo1 from '../assets/robo1.png'
import Robo2 from '../assets/robo2.png'
import Robo3 from '../assets/robo3.png'
import Robo4 from '../assets/robo4.png'
import Robo5 from '../assets/robo5.png'
import Robo6 from '../assets/robo6.png'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from "../firebase";
import {Link} from 'react-router-dom'
import storage from '../store'

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    onSnapshot(query(collection(db, 'Product')), (querySnapshot) => {
      const temp = []
      querySnapshot.docs.map((doc) => {
        temp.push({
          id: doc.id,
          name: doc.data()['name'],
          description: doc.data()['description'],
          image: doc.data()['imageURL'],
          price: doc.data()['price']
        })
      })
      setData(temp)
    })
  }, [])

  return (
    <div className='cor' id="product">
      <div className="titulo">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className='cards'>
        {
          data.map((item) => (
            <div className="card" key={item.name}>
              <div className="imgBox">
                <img src={Robo1} alt="" className="mouse"></img>
              </div>
              <div className="contentBox">
                <h3>{item.name}</h3>
                <h2 className="price"><small>{item.price}</small></h2>
                <Link to='/forum' onClick={() => (storage.atual = item.id, storage.objectData = item)}>
                  <a href="#" className="view">View</a>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;

/*
<div class="card">
  <div class="imgBox">
    <img src={Robo2} alt="mouse corsair" class="mouse"></img>
  </div>
  <div class="contentBox">
    <h3>Robo EWTF</h3>
    <h2 class="price"><small>U$ 25.950</small></h2>
    <a href="#" class="view">View</a>
  </div>
</div>
<div class="card">
  <div class="imgBox">
    <img src={Robo3} alt="mouse corsair" class="mouse"></img>
  </div>
  <div class="contentBox">
    <h3>Robo EWFX</h3>
    <h2 class="price"><small>U$ 41.321</small></h2>
    <a href="#" class="view">View</a>
  </div>
</div>
<div class="card">
  <div class="imgBox">
    <img src={Robo4} alt="mouse corsair" class="mouse"></img>
  </div>
  <div class="contentBox">
    <h3>Robo EWTK</h3>
    <h2 class="price"><small>U$ 32.84</small></h2>
    <a href="#" class="view">View</a>
  </div>
</div>
<div class="card">
  <div class="imgBox">
    <img src={Robo5} alt="mouse corsair" class="mouse"></img>
  </div>
  <div class="contentBox">
    <h3>Robo EWSG</h3>
    <h2 class="price"><small>U$ 19.500</small></h2>
    <a href="#" class="view">View</a>
  </div>
</div>
*/