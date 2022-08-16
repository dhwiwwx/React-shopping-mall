import { memo, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../Store';
import { addCount } from '../Store';
import { changeName, increase } from '../Store/userSlice';

function Memo (){
    return
}

function Cart() {
    let result = useMemo(()=>{return Memo()},[])
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    let [count,setCount] = useState(0);

    return (
        <div>
            
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Cart;