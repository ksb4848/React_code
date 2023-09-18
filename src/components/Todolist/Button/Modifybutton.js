import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, InputGroup } from "react-bootstrap";


function Modifybutton(props) {
  let [updatetag, setUpdatetag] = useState();
  const [updatetitle, setUpdatetitle] = useState('');
  const [updatestarttime, setUpdatestarttime] = useState('');
  const [updateendtime, setUpdateendtime] = useState('');
  const [updatetextarea, setUpdatetextarea] = useState('');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUpdatetag(Number(props.value.tag));
    setUpdatetitle(props.value.title);
    setUpdatestarttime(props.value.starttime);
    setUpdateendtime(props.value.endtime);
    setUpdatetextarea(props.value.textarea);
    setValidated(false)
    
  }, [props]);

  const data = {
    title: updatetitle,
    tag: Number(updatetag),
    textarea: updatetextarea,
    starttime: updatestarttime,
    endtime: updateendtime,
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if(form.checkValidity() === true) {
      dispatch({type: 'TODO_UPDATE', value: data, index: props.index});
      props.onHide();
    }
    setValidated(true);
    event.preventDefault();
  };

  return (
    <ModalM.Wrapper>
      <Modal {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Work!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
  {/* Tag */}
              <Form.Label>Work Tag</Form.Label>
              <Form.Select value={String(updatetag)} size="sm" onChange={
                      (e) => {
                          setUpdatetag(e.target.value)
                      }
                    }>
                <option value={updatetag = 1}>Work</option>
                <option value={updatetag = 2}>Health</option>
                <option value={updatetag = 3}>Eat</option>
                <option value={updatetag = 4}>Study</option>
                <option value={updatetag = 5}>Sleep</option>
                <option value={updatetag = 6}>Game</option>
              </Form.Select>
            
  {/* Title */}
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Work Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  value={updatetitle|| ''}
                  onChange={
                    (e) => {
                        setUpdatetitle(e.target.value)
                    }
                  }
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
  {/* Time */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Add Time</Form.Label>
                <ModalM.SubTitle>Start</ModalM.SubTitle>
                <Form.Control
                  required
                  type="time"
                  placeholder="StratTime"
                  value={updatestarttime|| ''}
                  onChange={
                    (e) => {
                        setUpdatestarttime(e.target.value)
                    }
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
                <ModalM.SubTitle>End</ModalM.SubTitle>
                <Form.Control
                  required
                  type="time"
                  placeholder="EndTime"
                  value={updateendtime|| ''}
                  onChange={
                    (e) => {
                        setUpdateendtime(e.target.value)
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
                value={updatetextarea|| ''}
                onChange={
                  (e) => {
                      setUpdatetextarea(e.target.value)
                  }
                }
                />
              </Form.Group>

              <ModalM.ButtonG>
                <Button variant="secondary" onClick={props.onHide}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </ModalM.ButtonG>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </ModalM.Wrapper>
  );
}

export default Modifybutton;

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
const ButtonG = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  
  button {margin: 0 4.5px;}
`

const ModalM = {
  Wrapper,
  SubTitle,
  ButtonG
}
