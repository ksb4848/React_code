import { styled } from "styled-components";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Modify from '../Button/Modifybutton'
import Delete from '../Button/Deletebutton'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log(),
  );

  return (
    <h5
      type="text"
      onClick={decoratedOnClick}
    >
      {children}
    </h5>
  );
}


function Listview() {
  
  const listData = useSelector( (state) => state);
  console.log(listData)

  const [modifymodalShow, setModifyModalShow] = useState(false);
  const [deletemodalShow, setDeleteModalShow] = useState(false);
  const [index, setindex] = useState("");
  const [updata, setUpdateData] = useState("");

  const dispatch = useDispatch();

  const onChange = (checked, idx) => {
  
    let customel = document.querySelectorAll("h5");
    if(checked) {
      customel[idx].style.color = "rgb(51, 51, 51, .5)";
      customel[idx].style.textDecoration = "line-through";
    } else {
      customel[idx].style.color = "#333";
      customel[idx].style.textDecoration = "none";
    }
    
    dispatch({type: 'check', payload: checked, idx})
  }

  const clickUpdate = (data, idx) => {
    setModifyModalShow(true)
    setUpdateData(data)
    setindex(idx)
  }
  const clickDelete = (idx) => {
    setDeleteModalShow(true)
    setindex(idx)
  }


  
  return (
    <LV.Wrapper>
      <LV.ReadS>
      <Accordion defaultActiveKey={['1']}>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>
                  {/* <Form.Check.Input type={"checkbox"} isValid /> */}
                </th>
                <th colSpan={2}>Title</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {listData.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <Form.Check.Input 
                        onClick={({ target: { checked } }) => onChange(checked, idx)} type={"checkbox"} isValid />
                      </td>
                      <td colSpan={2}>
                        <Card.Header className="title_sec">
                          <CustomToggle eventKey={idx}>{data.title}</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={idx}>
                          <Card.Body>
                            <h6>Title: {data.title}</h6> 
                            <p>
                              {data.textarea}
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </td>
                      <td>
                        <p>
                        {data.starttime} ~ {data.endtime}
                        </p>
                      </td>
                      <td>
                        <div>
                          <Button onClick={ () => clickUpdate(data, idx) } as="input" variant="primary" type="submit" size="sm" value="수정" />{' '}
                          <Button onClick={ () => clickDelete(idx) } as="input" variant="danger" type="submit" size="sm" value="삭제" />{' '}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            
          </Table>
            {listData.length === 0 && (
              <div className="emptycontext">
                등록된 게시글이 없습니다.
              </div>
            )}
          </Accordion>
          <Modify 
          show={modifymodalShow}
          onHide={() => setModifyModalShow(false)}
          value = {updata}
          index = {index}
          />
          <Delete 
          show={deletemodalShow}
          onHide={() => setDeleteModalShow(false)}
          index = {index}
          />
      </LV.ReadS>
    </LV.Wrapper>
  );
}


export default Listview;

const Wrapper = styled.div`
  height: 500px;
  overflow:auto;
  @media (max-width: 900px) {
    height: 290px;
  }
`

const ReadS = styled.div`
  padding: 0;
  height: 100%;
  // margin-top: 10px;

  .title_sec {
    display: flex;
    width: 100%;
    height: 48px;
  }
  h5 {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    line-height:48px;
  }

  td:nth-child(1) {width:25px;}
  td:nth-child(1) > input {margin-top:7px;}
  td:nth-child(2) {
    width:100%;
    text-align:left;
    padding: 0;
    padding-left: 20px;
  }
  td:nth-child(3) > p {
    width: 120px;
    margin: 0 auto;
    line-height: 30px;
  }
  td:nth-child(4) > div {
    width:90px;
  }
  td:nth-child(4) > input {
    margin: 0 1px;
  }

  @media (max-width: 1820px) {
    h5 {width: 250px;} 
  }
  @media (max-width: 1420px) {
    h5 {width: 140px;} 
  }
  @media (max-width: 1130px) {
    h5 {width: 100px;} 
  }
  @media (max-width: 900px) {
    th {font-size: 12px;}
    h5 {
      width: 120px;
      font-size: 14px;
    }
    td:nth-child(2) {
      width: 100%;
      padding-left: 5px;
    }
    td:nth-child(3) > p {
      width: 80px;
      font-size: 12px
    }
    td:nth-child(4) > div {
      width:70px;
    }

    td:nth-child(4) > div > input {
      width: 30px;
      padding: 5px 0;
      font-size: 10px;
      font-weight: 800;
    }
  }
  h6 {font-weight: 800;}
  .emptycontext {
    position:absolute;
    margin-top: 50px;
    margin-left: 15%;
    // right: 32%;
  }

  p {white-space: pre;}
`



const SubList = styled.div`
  overflow: hidden;
  height: 0;
`


const LV = {
  Wrapper,
  ReadS,
  SubList
}