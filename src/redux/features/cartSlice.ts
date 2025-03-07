import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    products:IProduct[]
}

const initialState:InitialState = {products: []}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice.reducer