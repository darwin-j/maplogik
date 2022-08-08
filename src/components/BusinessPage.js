import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function BusinessPage() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={"../business.jpg"} width={"730px"} />
      </div>
      <div
        style={{ marginLeft: "220px", marginTop: "100px", fontSize: "25px" }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="">Name</Form.Label>
            <Form.Control
              style={{ width: "380px" }}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="">Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="">Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="">Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" />
          </Form.Group>
          <Link to="submitted">
            <Button
              style={{ fontSize: "20px" }}
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

export default BusinessPage;
