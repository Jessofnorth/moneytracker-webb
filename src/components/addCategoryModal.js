import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import GetData from "../services/getdata";

export default function AddCategoryModal({ show, handle }) {
  //create refs for inputs
  const nameRef = useRef();
  const maxbudgetRef = useRef();

  //function for save btn
  function handleSubmit(e) {
    e.preventDefault();
    const object = {
      name: nameRef.current.value,
      maxbudget: parseInt(maxbudgetRef.current.value),
    };
    GetData.createCategory(object);
    handle();
    window.location.reload();
  }
  return (
    <Modal show={show} onHide={handle}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group controlId="maxbudget" className="mb-3">
            <Form.Label>Max amount to spend</Form.Label>
            <Form.Control
              ref={maxbudgetRef}
              type="number"
              required
              min={0}
              step={1}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              Save
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
