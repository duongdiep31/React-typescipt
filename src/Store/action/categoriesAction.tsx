
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllcate, insertcate, removecate, updatecate } from "../../api/categories";
import { ICategory } from "../../model/props";
export const itemCate = createAsyncThunk(
    'categories/itemcate',
    async () => {
        const {data} = await getAllcate()
        return data
    }
  )
export const createCate = createAsyncThunk(
    'categories/createCate',
    async (category : ICategory) => {
        const {data} = await insertcate(category)        
        return data
    }
)
export const deleteCate = createAsyncThunk(
    'categories/removeCate',
    async (id : number) => {
        const {data} = await removecate(id)
        return data
    }
)
export const changeCate = createAsyncThunk(
    'categories/changeCate',
    async (category : ICategory) => {
        const {data} = await updatecate(category.id,category)
        return data
    }
)