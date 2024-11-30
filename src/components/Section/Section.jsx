import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Section.css';
import {db} from "../../firebaseConfig";
import { getDocs, doc, collection } from "firebase/firestore";
import CardContainer from '../Card/Card';
import Support from './messages-image.png'
import Notification from './notification.png'

const SectionContainer = () => {
  const [information, setInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const colRef = collection(db, 'wanted');
  
  useEffect(() => {
    const getInformation = async() => {
      const data = await getDocs(colRef)
      setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }
    getInformation()
  }, []) 

  const filteredInformation = information.filter((info) =>
    Object.values(info)
      .join(' ') // Combine all values of the object into a single string
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="section-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Qidirish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Render filtered cards */}
      {filteredInformation.map((info) => (
        <CardContainer key={info.id} info={info} />
      ))}
      {/* {information.map((info) => (
        <CardContainer info={info}/>
      ))} */}

      <div className='support'>
        <img src={Support} alt='support'/>
      </div>
      <div className="notification">
        <img src={Notification} alt="notification" />
      </div>
    </div>
  )
}

export default SectionContainer;
