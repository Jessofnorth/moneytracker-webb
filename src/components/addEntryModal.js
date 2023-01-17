import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import GetData from "../services/getdata";

//Modal with form for adding entry
export default function AddEntryModal({ show, handle, categories }) {
  //create refs for inputs connected to inputs
  const nameRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const categoryRef = useRef();

  //function for save btn thats sends object with input values to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = {
      title: nameRef.current.value,
      amount: parseInt(amountRef.current.value),
      date: dateRef.current.value,
      category_id: categoryRef.current.value,
    };
      await GetData.createEntry(object)
        .then(function (res) {
          //  await response before reload so data will render
          window.location.reload();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    
  }

  return (
    //Modal with form - show/hide function, savebtn, closebtn, selection list with categories from db
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
          {/* takes categories state from parent and loops the categories to selection list for connecting entry to category in db */}
          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select ref={categoryRef} defaultValue={"zero"} required>
              <option disabled value={"zero"}>
                Choose a category
              </option>
              {categories.map((category) => (
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
