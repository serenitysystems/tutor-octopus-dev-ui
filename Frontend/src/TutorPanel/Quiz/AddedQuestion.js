import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const AddedQuestion = () => {
    const questions = [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Rome'],
        },
        {
          question: 'Who wrote "To Kill a Mockingbird"?',
          options: ['Harper Lee', 'Stephen King', 'J.K. Rowling', 'Mark Twain'],
        },
        // Add more question objects here as needed
      ];

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h5>Question {index + 1}</h5>
          <Form>
            <FormGroup  className="mb-3">
              <FormLabel className="-p">Question:</FormLabel>
              <FormControl
                type="text"
                value={question.question}
                readOnly
              />
            </FormGroup>
            {question.options.map((option, optionIndex) => (
             <div className="p-">
             <Form.Group className="mb-3" controlId={`option${optionIndex}`}>
                 <Form.Control
                     type="text"
                     name="option"
                     value={option}
                     required
                 />
             </Form.Group>
             </div>
            ))}
          </Form>
        </div>
      ))}
    </div>
  );
};

export default AddedQuestion;
