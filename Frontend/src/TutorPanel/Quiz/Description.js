import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Description({onSubjectChange,onDescriptionChange}) {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onSubjectChange(inputValue)

  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
    onDescriptionChange(textareaValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Input value:', inputValue);
    console.log('Textarea value:', textareaValue);
    // You can perform further actions like sending the data to a server
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="inputField">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="textareaField">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={textareaValue}
          onChange={handleTextareaChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Description;
