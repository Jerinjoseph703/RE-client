import React from 'react'


const EditTable = () => {
  return (
    <div>
        <h2>Edit Property</h2>
        <label>Edit Name</label>
        <input 
            placeholder='Location'
            value={property.placeName}

        />

        <label>Edit Name</label>
        <input 
            placeholder='Discription'
            value={property.description}

        />

        <label>Edit Name</label>
        <input 
            placeholder='Price'
            value={property.price}

        />

        <label>Edit Name</label>
        <input 
            placeholder='Parking'
            value={property.parking}

        />

        <label>Edit Name</label>
        <input 
            placeholder='Bedroom'
            value={property.bedRooms}

        />



    </div>
  )
}

export default EditTable