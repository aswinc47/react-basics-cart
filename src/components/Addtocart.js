import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addtocart(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter h1 ">
        Add to Cart?
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className='h5' >
        Do you want to confirm purchase of {props.product.title} for {props.product.price} $ ?
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-primary' onClick={props.onHide}>Close</Button>
      <Button onClick={props.onConfirm}>Confirm</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Addtocart