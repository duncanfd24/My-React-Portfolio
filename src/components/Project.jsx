import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles.css';

function Project({ title, description, link, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} ClassName="project-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          Check It Out
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;