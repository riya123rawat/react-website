
import React from 'react';
import { Button } from 'react-bootstrap';

function AdvertisementCard({ ad }) {
   return (
    <div className="advertisement-card" style={{ border: '1px solid #ccc', padding: '20px', margin: '50px', borderRadius: '5px',backgroundColor:'grey' }}>
    
      <h2>{ad.title}</h2>
      <p>{ad.description}</p>
      <p>Contact: {ad.Contact}</p>
      <Button onClick>Details</Button>
       </div>
  );
}

export default AdvertisementCard;





