import React, {useEffect, useState} from 'react';
import './Section.css';
import {db} from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import CardContainer from '../Card/Card';
import Support from './messages-image.png'
import Notification from './notification.png'

// const SectionContainer = () => {
  const SectionContainer = ({ selectedDistrict }) => {
    const [information, setInfo] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const colRef = collection(db, 'wanted');
  
    useEffect(() => {
      const getInformation = async () => {
        const data = await getDocs(colRef);
        setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getInformation();
    }, []);
  
    const filteredInformation = information.filter((info) =>
      (!selectedDistrict || info.town === selectedDistrict) &&
      Object.values(info)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="section-container">
          <input
            type="text"
            className='search-bar'
            placeholder="Qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        {filteredInformation.map((info) => (
          <CardContainer key={info.id} info={info} />
        ))}

        {/* <div className='support'>
           <img src={Support} alt='support'/>
         </div>
         <div className="notification">
           <img src={Notification} alt="notification" />
         </div> */}
      </div>
    );
  };
  
export default SectionContainer;    
