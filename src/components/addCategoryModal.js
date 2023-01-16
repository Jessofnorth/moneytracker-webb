import { Modal, Form, Button } from "react-bootstrap"
export default function AddCategoryModal({show, handle}){
    function handleSubmit(e){

    }
return(
<Modal show={show} onHide={handle}>
<Form onSubmit={handleSubmit}>
    <Modal.Header>
        <Modal.Title>New Category</Modal.Title>
    </Modal.Header>
<Modal.Body>
<Form.Group controlId="name" className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" required/>
</Form.Group>
<Form.Group controlId="maxbudget" className="mb-3">
    <Form.Label>Max amount to spend</Form.Label>
    <Form.Control type="number" required min={0} step={1}/>
</Form.Group>
<div className="d-flex justify-content-end">
    <Button variant="success" type="submit">Save</Button>
</div>
</Modal.Body>
</Form>
</Modal>
)
}