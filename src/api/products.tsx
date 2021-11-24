import { IProduct } from "../model/props";
import instance from "./instance";
export const getAll = () => {
    const url = '/api/products/'
    return instance.get(url)
}
export const get = (id:any) => {
    const url = `/api/product/` + id
    return instance.get(url)
}
export const remove = (id:number) => {
    const url = `/api/products/${id}`
    return instance.delete(url)
}
export const insert = (product:IProduct) => {
    const url = '/api/product/'
    return instance.post(url, product)
}
export const update = (id:Number, product:IProduct) => {
    const url = `/api/products/${id}`;
    return instance.patch(url, product)
}