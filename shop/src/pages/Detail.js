import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { Context1 } from './../App';
import {addItem} from '../Store'
import {useDispatch} from 'react-redux';

function Detail(props) {



  let [DetailFade, setDetailFade] = useState('');
  useEffect(() => {
    setDetailFade('end')
    return () => {
      setDetailFade('')
    }
  }, [])


  useEffect(() => {
    setTimeout(() => { setalert(false) }, 2000)

  }, [])


  let [count, setcount] = useState(0)
  let [alert, setalert] = useState(true)
  let { id } = useParams();
  let found = props.shoes.find(x => x.id == id)
  let [tab, setTab] = useState(0)
  let dispatch = useDispatch()

  return (
    <div className={"container start " + DetailFade}>
      {
        alert == true
          ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
          : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">

          <h4 className="pt-5">{found.title}</h4>
          <p>{found.content}</p>
          <p>{found.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))
            }}>주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes} />
    </div>
  )
}
function TabContent({ tab }) {
  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)

    return () => {
      setFade('')
    }
  }, [tab])
  return <div className={'start ' + fade}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
  </div>
}

export default Detail;
// Detail page 화면안뜨는 이유 찾기..ㅠ