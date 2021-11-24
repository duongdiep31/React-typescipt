import { ICategory } from "../model/props";
import instance from "./instance";
export const getAllcate = () => {
    const url = '/api/categories/'
    return instance.get(url)
}
export const getcate = (id: any) => {
    const url = `/api/categories/${id}`
    return instance.get(url)
}
export const removecate = (id : Number) => {
    const url = `/api/categories/` + id 
    return instance.delete(url)
}
export const insertcate = (category: ICategory) => {
    const url = '/api/category/'
    return instance.post(url, category)
}
export const updatecate = (id:Number, category: ICategory) => {
    const url = `/category/${ id}`;
    return instance.patch(url, category)
}