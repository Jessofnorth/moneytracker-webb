import { Modal, Form, Button, Stack } from "react-bootstrap";
import GetData from "../services/getdata";

//Modal with form for adding entry
export default function ViewEntryModal({ show, handle, entries, category }) {
  //delete function for entry 
  const deleteEntry = async (id) => {
    await GetData.deleteEntry(id)
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
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>{category?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            {entries?.map((entry) => (
              <Stack direction="horizontal" gap="3" key={entry?._id}>
                <div className="fs-5 font-weight-bold">{entry?.title}</div>
                <div className="me-auto fs-5 text-muted font-weight-light ">{entry?.date.substring(0, 10)}</div>
                <div className="fs-5 ">{entry?.amount} sek</div>
                <Button onClick={() => deleteEntry(entry?._id)} size="sm" variant="outline-danger">&times;</Button>
              </Stack>
            ))}
          </Stack>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
