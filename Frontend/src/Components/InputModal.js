import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const InputModal = ({ setShowStudentIdModal }) => {
  const {
    formState: { errors },
    register,
    watch,
    handleSubmit,
  } = useForm();
  const studentForm = watch();
  const navigate = useNavigate();

  const onSubmit = () => {
    const studentId = studentForm.studentId;
    console.log(studentForm, errors);
    navigate(`result-card/${studentId}`);
  };

  return (
    <>
      <Modal show={true} onHide={() => setShowStudentIdModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student ID for Result Card</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                {...register("studentId", { required: "This is required" })}
              />

              {errors?.studentId && (
                <Form.Text className="text-danger">
                  {errors?.studentId?.message}
                </Form.Text>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-theme-secondary"
              onClick={() => setShowStudentIdModal(false)}
            >
              Cancel
            </Button>
            <Button className="btn-theme-primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default InputModal;
