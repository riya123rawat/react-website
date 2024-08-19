import React from 'react';
import AdvertisementCard from './AdvertisementCard';

function AdvertisementList(props) {
  return (
    
    <div className="advertisement-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
      {props.advertisements.map((ad, index) => (
        <AdvertisementCard key={index} ad={ad} />
      ))}
    </div>
  );
}

export default AdvertisementList;


