import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Booking.css"; // Import the CSS file for styling

function BookingTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking details from backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/listBookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching booking details:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="booking-table-container">
      <h2>Booking Details</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            {/* <th>User ID</th> */}
            <th>Property ID</th>
            <th>Email</th>
            <th>PhoneNo</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking._id}</td>
              {/* <td>{booking.user_id}</td> */}
              <td>{booking.propertyiD}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
