import React, { Fragment } from 'react';
import '../static/about.css';
import Card from '.././components/About/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Appoinment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group id="modal-appointment-category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group id="modal-appointment-date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Fragment>
      <section className="dashboard-section">
        <div className="dashboard-add-container">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            +
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="dashboard-appointments">
          <Card></Card>
        </div>
      </section>
    </Fragment>
  );
}
