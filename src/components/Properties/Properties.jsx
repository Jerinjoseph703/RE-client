import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { BallTriangle } from 'react-loader-spinner';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/getProperty?status=true');
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div>
      {loading ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <BallTriangle
            height={90}
            width={90}
            radius={5}
            color="#322502"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        properties.map(property => (
          <Card key={property._id} className="property-card" sx={{ minWidth: 275 }}>
            <CardContent className="property-content">
              <img className="property-image" src={`data:image/png;base64,${Buffer.from(property.image.data).toString('base64')}`} alt="Property" />
              <div className="property-info">
                <h3>{property.propertyName}</h3>
                <p>Place: {property.placeName}</p>
                <p>Price: {property.price}</p>
                <p>Description: {property.description}</p>
                <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
                <p>Bedrooms: {property.bedRooms}</p>
                
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Book Now</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}

export default Properties;
