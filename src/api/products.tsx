import { IProduct } from "../model/props";
import instance from "./instance";
export const getAll = () => {
    const url = '/products/'
    return instance.get(url)
}
export const get = (id:Number) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const remove = (id:Number) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const insert = (product:IProduct) => {
    const url = '/products/'
    return instance.post(url, product)
}
export const update = (id:Number, product:IProduct) => {
    const url = `/products/${id}`;
    return instance.patch(url, product)
}