import React, { useState, useEffect } from 'react';
import { Pagination, Modal } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaBirthdayCake,FaUsers } from 'react-icons/fa'; // Import icons from react-icons
import './UserList.css'; //import { BsPersonBoundingBox } from "react-icons/bs";

function UserList() {
  const [users, setUsers] = useState([]);
  const [ setLoading] = useState(true);
  const [ setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setUsers(data);
          
        } else if (typeof data === 'object' && data.users) {
         
          setUsers(data.users);
          
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setError(error);
        
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUserDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mt-4">
      <h2 className="mb-3"> <FaUsers /> Users List</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} onClick={() => handleUserDetails(user)} style={{ cursor: 'pointer' }}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination className="mt-3">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Modal show={!!selectedUser} onHide={handleCloseDetails} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <div className="d-flex align-items-start">
        <img src={selectedUser.image} alt={selectedUser.firstName} style={{ width: '100px', height: '100px' }} className="mr-3" />
                <div>
                  <h5>Name: {selectedUser.firstName} {selectedUser.lastName}</h5>
                  <p><FaEnvelope /> Email: {selectedUser.email}</p> 
                  <p><FaPhone /> Phone: {selectedUser.phone}</p> 
                  <p><FaBirthdayCake /> Birth Date: {selectedUser.birthDate}</p>
                
                </div>
              </div>
              <hr />
              <h6>Additional Information:</h6>
              <ul>
                <li>Age: {selectedUser.age}</li>
                <li>Gender: {selectedUser.gender}</li>
                <li>Address: {selectedUser.address.address}, {selectedUser.address.city}, {selectedUser.address.state}, {selectedUser.address.postalCode}</li>
               
              </ul>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserList;
