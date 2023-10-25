import React, { useEffect, useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import Note from './Note'

const Notes = () => {
    const [users, setUsers] = useState([]);


    const loadUsers = async() => { 
  
      try {
        const resp = await fetch("https://651da7ea44e393af2d5a24ab.mockapi.io/api/v1/users/?id");
        const data = await resp.json();
  
        setUsers(data);
  
      } catch (err) {
        console.log(err);
      }
  
     }
  
    useEffect(() => {
      // useEffect in kendisi de asenkron çalışır
      loadUsers();
      
    }, []);
  return (
    <Container>
    <Row className="square border border-info border-2 rounded">
      {users.map((user) => (
        <Col key={user.id}>
          <Note title={user.title} />
        </Col>
      ))}
    </Row>
  </Container>
           
               
       
  )
}

export default Notes