import { ICategory } from "../model/props";
import instance from "./instance";
export const getAllcate = () => {
    const url = '/categories/'
    return instance.get(url)
}
export const getcate = (id: any) => {
    const url = `/categories/${id}`
    return instance.get(url)
}
export const removecate = (id : Number) => {
    const url = `/categories/` + id 
    return instance.delete(url)
}
export const insertcate = (category: ICategory) => {
    const url = '/categories/'
    return instance.post(url, category)
}
export const updatecate = ( category: ICategory) => {
    const url = `/categories/${category.id}`;
    return instance.patch(url, category)
}