import { styled } from "styled-components";
// import { useState } from "react";
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeleteB(props) {

  const dispatch = useDispatch();

  const ondelete = () => {
    props.onHide();
    let idx = props.index;

    dispatch({type: 'TODO_DELETE', index: idx});
  }
  
  return(
    <D.ButtonD>
      <Modal {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>정말 해당 일과를 지우시겠습니까?</h4>
          <p>
            생각해보시고 삭제를 원하지 않으시면 Close를 눌러주세요~
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="danger" onClick={ondelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </D.ButtonD>
  );
}

export default DeleteB;

const ButtonD = styled.div `
`

const D = {
  ButtonD
}