import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {

  useEffect(()=>{
  setTimeout(()=>{setalert(false)}, 2000)
  
  }, [])
  useEffect(()=>{
    if (isNaN(num) == true) {
    alert('그러지마세요')
      }
  },[num])

  let [count, setcount] = useState(0)
  let [alert, setalert] = useState(true)
  let { id } = useParams();
  let found = props.shoes.find(x => x.id == id)
  let [num, setNum] = useState('')
  return (
    <div className="container">
      {
        alert == true
        ?<div className="alert alert-warning">
        2초이내 구매시 할인
      </div>
      :null
      }

      
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <input onChange={(e)=>{setNum(e.target.value)}}/>
            
          <h4 className="pt-5">{found.title}</h4>
          <p>{found.content}</p>
          <p>{found.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}
export default Detail;
// Detail page 화면안뜨는 이유 찾기..ㅠ