import { createSlice } from "@reduxjs/toolkit";
import { createCate, itemCate } from "../action/categoriesAction";
export const categorySlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        category: [
            {
            _id: '',
            name: '',
            image: ''   

            }
        ]
    },
    reducers: {},
    extraReducers:  (builder)  =>{
            builder.addCase(itemCate.fulfilled, (state, action) => {
                        state.category = action.payload
            })
            builder.addCase(createCate.fulfilled, (state,aciton) => {
                    console.log('slice',state);
                                    
                        state.category += aciton.payload
            })
        }
  })
  export default categorySlice