import styled from "styled-components";
import ListView from "./Listview"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WModal from './Writemodal'
import React, { useState } from "react";
import SChart from '../Sehedule/Sechedulechart'


function Writelist() {
  const [addmodalShow, setModalShow] = useState(false);

  return (
    <R.Wrapper>
      <SChart/>
      <R.SubWrapper>
        <R.SectionB>
          <R.WriteS>
            {/* <Form.Group className="mb-3" controlid="formBasicSearch1">
              <Form.Control
                type="input"
                placeholder="Search"
                />
            </Form.Group> */}
            <Form.Group className="mb-3" controlid="formBasicText">
              <Form.Label>Todo List</Form.Label><br/>
              <Form.Text className="text-muted">
                오늘은 무엇을 해야되는가
              </Form.Text>
              <br/>
              <Button variant="primary" type="submit" onClick={() => setModalShow(true)}>
                등록
              </Button>
              <WModal 
              show={addmodalShow}
              onHide={() => setModalShow(false)}
              />
            </Form.Group>
          </R.WriteS>
          <ListView />
        </R.SectionB>
      </R.SubWrapper>
    </R.Wrapper>
  );
}

export default Writelist;
const Wrapper = styled.div`
  display: flex;
   flex-wrap: wrap;
   
   width: 70%;
   min-height: 600px;
   background-color: #fff;
   margin: 0 auto;
   @media (max-width: 900px) {
    width: 100%;
     padding : 2%;
   }
`

const SectionB = styled.div`
  padding: 2%;
`

const WriteS = styled.div`
  label {font-size: 24px; font-weight: 800;}
  button {margin-top: 20px;}
`
const SubWrapper = styled.div`
  overflow:hidden;
  width:60%;
  border-left: 1px solid rgb(51, 51, 51, .2);

  @media (max-width: 900px) {
    width: 100vw;
    height: 50vh;
    border: none;
  }
`



const R = {
  Wrapper,
  SubWrapper,
  SectionB,
  WriteS,
}
