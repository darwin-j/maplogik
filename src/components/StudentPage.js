import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


function StudentPage() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={"../student.jpg"} width={"730px"} />
      </div>
      <div style={{ margin: "200px", fontSize: "30px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="">Email address</Form.Label>
            <Form.Control
              style={{ width: "380px" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="submitted">
            <Button
              style={{ fontSize: "25px" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default StudentPage;
