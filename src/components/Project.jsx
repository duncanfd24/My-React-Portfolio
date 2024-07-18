import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles.css';

function Project({ title, description, link, link2, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="project-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          App In Action 
        </Button>
        <p></p>
        <Button variant="primary" href={link2} target="_blank">
          Github Repository
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;