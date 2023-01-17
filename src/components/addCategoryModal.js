import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import GetData from "../services/getdata";

//Modal with form to add category
export default function AddCategoryModal({ show, handle }) {
  //create refs for inputs to connect to inputs
  const nameRef = useRef();
  const maxbudgetRef = useRef();

  //function for save btn, 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = {
      name: nameRef.current.value,
      maxbudget: parseInt(maxbudgetRef.current.value),
    };
    await GetData.createCategory(object)
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
    //Modal with form - closebtn, savebtn, and shiw/hide thru changing state in parent
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
