import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface InitialState {
    products:IProduct[]
}

const initialState:InitialState = {products: []}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state,action)=> {
            state.products.push(action.payload)
        }
    }
})


export const orderedProductSelector = (state:RootState)=>{
    return state.cart.products
}
export const {addProduct}= cartSlice.actions
export default cartSlice.reducer