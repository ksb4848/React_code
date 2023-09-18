import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col } from "react-bootstrap";



function Writemodal(props) {

  const [validated, setValidated] = useState(false);


  let [tag, settag] = useState(1);
  const [title, settitle] = useState('');
  const [starttime, setstarttime] = useState('');
  const [endtime, setendtime] = useState('');
  const [textarea, settextarea] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    settag(1);
    settitle("");
    setstarttime("");
    setendtime("");
    settextarea("");
    setValidated(false);
    
  }, [props]);

  const data = {
    title: title,
    tag: tag,
    textarea: textarea,
    starttime: starttime,
    endtime: endtime,
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if(form.checkValidity() === true) {
      dispatch({type: 'TODO_REGIST', payload: data})
      props.onHide();
    }
    setValidated(true);
    event.preventDefault();
  };

  return (
    <ModalG.Wrapper>
      <Modal {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Work!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
  {/* Tag */}
            <Form.Label>Work Tag</Form.Label>
            <Form.Select  size="sm" onChange={
                    (e) => {
                        settag(e.target.value)
                    }
                  }>
              <option value={tag = 1}>Work</option>
              <option value={tag = 2}>Health</option>
              <option value={tag = 3}>Eat</option>
              <option value={tag = 4}>Study</option>
              <option value={tag = 5}>Sleep</option>
              <option value={tag = 6}>Game</option>
            </Form.Select>
  {/* Title */}
              <Form.Group as={Col} className="mb-3" controlid="exampleForm.ControlInput1">
                <Form.Label>Work Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={
                    (e) => {
                        settitle(e.target.value)
                    }
                  }
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
  {/* Time */}
              <Form.Group className="mb-3" controlid="exampleForm.ControlInput2">
                <Form.Label >Add Time</Form.Label>
                <ModalG.SubTitle>Start</ModalG.SubTitle>
                <Form.Control
                  required
                  type="time"
                  placeholder="StratTime"
                  value={starttime}
                  onChange={
                    (e) => {
                        setstarttime(e.target.value)
                    }
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
                <ModalG.SubTitle>End</ModalG.SubTitle>
                <Form.Control
                  required
                  type="time"
                  placeholder="EndTime"
                  value={endtime}
                  onChange={
                    (e) => {
                        setendtime(e.target.value)
                    }
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
  {/* Text Area */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Add Textarea</Form.Label>
                <Form.Control
                as="textarea"
                rows={3} 
                value={textarea}
                onChange={
                  (e) => {
                      settextarea(e.target.value)
                  }
                }
                />
              </Form.Group>

              <Button variant="secondary" onClick={props.onHide}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </ModalG.Wrapper>
  );
}


export default Writemodal;

const Wrapper = styled.div`
  label {
    font-weight: 800;
  }
`
const SubTitle = styled.h6`
  font-size: 10px;
  color: rgb(51, 51, 51, .7);
  margin-top: 10px;
`

const ModalG = {
  Wrapper,
  SubTitle,
}
