import { createSlice } from "@reduxjs/toolkit";
import { createPrd, itemPrd } from "../action/productsAction";
export const productSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        product: [
            {
                _id: '',
                name: '',
                image: '',
                slug: '',
                description: '',
                price: '',
                category: ''

            }
        ]
    },
    reducers: {},
    extraReducers:  (builder)  =>{
            builder.addCase(itemPrd.fulfilled, (state, action) => {
                        state.product = action.payload
            })
            builder.addCase(createPrd.fulfilled, (state,aciton) => {
                    console.log('slice',state);
                                    
                        state.product += aciton.payload
            })
        }
  })
  export default productSlice