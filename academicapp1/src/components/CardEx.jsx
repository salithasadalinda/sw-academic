import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardEx(props) { // renamed function
  return (
    <Card style={{ width: '19rem ' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">see more</Button>
      </Card.Body>
    </Card>
  );
}

export default CardEx; // renamed export statement
