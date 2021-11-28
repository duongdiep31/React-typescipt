import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categoriesSlice";
import productSlice from "./slice/productSlice";
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        category: categorySlice.reducer
        
    }
})
export type Rootstate = ReturnType<typeof   store.getState>
export default store