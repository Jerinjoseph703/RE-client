import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Property.css";

function PropertyTable() {
  const [properties, setProperties] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Fetch properties from backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/getProperty');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  const buttonStatus = (id, currentStatus) => {
    const newStatus = !currentStatus; // Toggle the status
    axios.put('http://127.0.0.1:5000/status', { _id: id, status: newStatus })
      .then((response) => {
        console.log("Status updated successfully");
        console.log("Updated status:", response.data.status); // Log the updated status
        // Update the status of the place in the state
        setProperties(prevProperties => prevProperties.map(property => {
          if (property._id === id) {
            return { ...property, status: response.data.status };
          }
          return property;
        }));
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  };

  return (
    <div className="property-table-container">
      <h2>Property List</h2>
      <div className="table_content">
      <table className="property-table">
        <thead>
          <tr>
            <th>iD</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Parking</th>
            <th>Bedroom</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property._id}>
              <td>{property.iD}</td>
              <td>{property.placeName}</td>
              <td>{property.description}</td>
              <td>{property.price}</td>
              <td>{property.parking ? 'Yes' : 'No'}</td>
              <td>{property.bedRooms}</td>
              <td>
                <button onClick={() => buttonStatus(property._id, property.status)} style={{
                  background: "#CBD5C0",
                  width: "100px",
                  height: "30px"
                }}>
                  {property.status ? 'Active' : 'Inactive'}
                </button>
              </td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PropertyTable;
