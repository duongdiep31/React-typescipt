import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, insert, remove, update } from "../../api/products";
import { IProduct } from "../../model/props";
export const itemPrd = createAsyncThunk(
    'product/itemPrd',
    async () => {
        const {data} = await getAll()
        return data
    }
  )
export const createPrd = createAsyncThunk(
    'product/create',
    async (product : IProduct) => {
        const {data} = await insert(product)
        console.log(product);
        
        return data
    }
)
export const deletePrd = createAsyncThunk(
    'product/removePrd',
    async (id : number) => {
        const {data} = await remove(id)
        return data
    }
)
export const changePrd = createAsyncThunk(
    'product/changePrd',
    async (product : IProduct) => {
        const {data} = await update(product.id,product)
        return data
    }
)