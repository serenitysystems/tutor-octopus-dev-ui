import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CreateQuiz } from "../../apicalls/Questions";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function Description({
  setInputValue, //subject
  setTextareaValue, //desc
  setstartTime, //time
  register,
  errors,
  quizType,
  setquizType
}) {
  const handleChange = (e, field) => {
    const value = e.target.value;
    if (field === "subject") {
      setInputValue(value);
    } else if (field === "description") {
      setTextareaValue(value);
    } else if (field === "time") {
      setstartTime(value);
    }
  };

  
const location=useLocation();


  return (
    <Form>
      {
        location.pathname.includes('Practice')===false
        ||quizType!='Practice' &&
        <Form.Group controlId="inputField" className="col-md-6">
        <Form.Label> DeadLine Time</Form.Label>
        <Form.Control
          type="time"
          {...register("time", { required: "This is required" })}
          // value={startTime}
          // onChange={(e) => handleChange(e, "time")}
        />
        {errors.time && (
          <Form.Text className="text-danger">{errors.time.message}</Form.Text>
        )}
      </Form.Group>
      }

      <Form.Group controlId="inputField">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          // value={inputValue}
          // onChange={(e) => handleChange(e, "subject")}

          {...register("subject", { required: "This is required" })}
        />
        {errors?.subject && (
          <Form.Text className="text-danger">
            {errors?.subject?.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="textareaField">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register("description", { required: "This is required" })}
          // value={textareaValue}
          // onChange={(e) => handleChange(e, "description")}
        />
        {errors.description && (
          <Form.Text className="text-danger">
            {errors.description.message}
          </Form.Text>
        )}
      </Form.Group>
    </Form>
  );
}

export default Description;
