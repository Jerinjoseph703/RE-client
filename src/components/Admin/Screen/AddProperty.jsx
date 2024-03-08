import React, { useState } from 'react';
import axios from 'axios';
import "./Add.css"

function AddPropertyForm() {
  const [property, setProperty] = useState({
    iD:'',
    propertyName: '',
    placeName: '',
    description: '',
    price: 0,
    parking: false,
    bedRooms: 0,
    image: null // Add image state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProperty(prevProperty => ({
      ...prevProperty,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProperty(prevProperty => ({
      ...prevProperty,
      image: imageFile
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('iD', property.iD);
      formData.append('propertyName', property.propertyName);
      formData.append('placeName', property.placeName);
      formData.append('description', property.description);
      formData.append('price', property.price);
      formData.append('parking', property.parking);
      formData.append('bedRooms', property.bedRooms);
      formData.append('image', property.image);

      const response = await axios.post('http://127.0.0.1:5000/addProperty', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Property added successfully:', response.data);
      setProperty({
        iD:'',
        placeName: '',
        propertyName: '',
        description: '',
        price: 0,
        parking: false,
        bedRooms: 0,
        image: null
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>iD:</label>
          <input
            type="text"
            name="iD"
            value={property.iD}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="placeName"
            value={property.placeName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
   
        <div className="form-group">
          <label>Property Name:</label>
          <input
            type="text"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={property.description}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="parking"
            checked={property.parking}
            onChange={handleChange}
            id="parking-checkbox"
          />
          <label htmlFor="parking-checkbox">Parking</label>
        </div>
        <div className="form-group">
          <label>Bedroom:</label>
          <input
            type="number"
            name="bedRooms"
            value={property.bedRooms}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Add Property</button>
      </form>
    </div>
  );
}

export default AddPropertyForm;
