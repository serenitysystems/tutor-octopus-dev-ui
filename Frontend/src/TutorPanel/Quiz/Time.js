import { Form } from "react-bootstrap";

const Time = ({ register, errors, clearErrors }) => {
  return (
    <>
      <Form.Group controlId="inputField">
      <Form.Label>Duration</Form.Label>
        <div className="d-flex gap-2">
          <div className="d-flex gap-1 align-items-center">
            <Form.Control
              type="number"
              min={0}
              style={{ width: "60px" }}
              {...register("hours", { required: "This is required" })}
            />
            <Form.Label>Hours</Form.Label>
          </div>
          <div className="d-flex gap-1 align-items-center">
            <Form.Control
              type="number"
              min={0}
              max={59}
              style={{ width: "60px" }}
              {...register("minutes", { required: "This is required" })}
              onChange={(e) => {
                let value = parseInt(e.target.value);
                if (isNaN(value)) {
                  value = 0;
                } else {
                  clearErrors("minutes");
                  if (value < 0) {
                    value = 0;
                  } else if (value > 59) {
                    value = 59;
                  } else if (value.toString().length > 2) {
                    value = parseInt(value.toString().slice(0, 2));
                  }
                }
                e.target.value = value;
              }}
            />
            <Form.Label>Minutes</Form.Label>
          </div>
        </div>

        {(errors.hours || errors.minutes) && (
          <Form.Text className="text-danger">This is required.</Form.Text>
        )}
      </Form.Group>
    </>
  );
};
export default Time;
