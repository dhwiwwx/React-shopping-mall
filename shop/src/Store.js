import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './Store/userSlice'



let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers:{
    addCount(state, action){
      let idNum = state.findIndex((a)=>{ return a.id === action.payload })
      state[idNum].count++
      
    }
  },
  addItem(state, action){
    state.push(action.payload)
  }
  
})
export let {addItem,addCount} = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 