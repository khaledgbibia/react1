import React from "react";
import {Button, Card}  from 'react-bootstrap';


const Profile =({userInfo})=>{

    return <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userInfo.imageUrl} />
      <Card.Body>
        <Card.Title>{userInfo.name}</Card.Title>
        <Card.Text>
          Etudiant GO MY CODE
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>;
};
export default Profile;