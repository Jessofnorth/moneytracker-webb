import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import GetData from "../services/getdata";

export default function AddEntryModal({ show, handle, categories }) {
  //create refs for inputs
  const nameRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const categoryRef = useRef();


  //function for save btn
  function handleSubmit(e) {
    e.preventDefault();
    const object = {
      title: nameRef.current.value,
      amount: parseInt(amountRef.current.value),
      date: dateRef.current.value,
      category_id: categoryRef.current.value
    };
    GetData.createEntry(object);
    handle();
    // window.location.reload();
  }
  return (
    <Modal show={show} onHide={handle}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group controlId="date" className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control ref={dateRef} type="date" required />
          </Form.Group>
          <Form.Group controlId="amount" className="mb-3">
            <Form.Label>Amount spent</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={1}
            />
          </Form.Group>
          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select ref={categoryRef} defaultValue={"zero"}  required>
              <option disabled value={"zero"}>Choose a category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
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
