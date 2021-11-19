import React, { useEffect, useState } from 'react';
import { getAllcate, insertcate, removecate, updatecate } from './api/categories';
import Routers from './Routers';
import { ICategory, IProduct} from './model/props'
import {AxiosResponse} from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAll, insert, remove, update } from './api/products';
  function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
      const getProducts = async  () => {
        try {
          const {data: products} = await getAll()
          
          setProducts(products)
        }catch(error){
            console.log(error)
        }
      }
      getProducts()
    },[])
    const onHandleAddprd = (product: IProduct) => {
            try {
                  insert(product).then((response: AxiosResponse) => {
                        setProducts([...products, response.data])
                        toast.success('Thêm Sản Phẩm Thành Công')
                  })
            } catch (error) {
              toast.error('Thêm Sản Phẩm Thất Bại')
            }              
    }
    const onHandleRemoveprd = (id: number) => {
              
          remove(id)
          try { 
          setProducts(products.filter(item => item.id !== id))
              toast.success('Xoá Thành Công')
            
          } catch (error) {
              toast.error('Xoá không thành công')
          }
    }
    const onHandleChangeprd = (product: IProduct) => {
      try {
          update(product.id,product)
        .then((response: AxiosResponse) => {
          const newprd = products.map(item => item.id === response.data.id ? response.data : item)
          setProducts(newprd)
          toast.success('Sửa thành công')
        }  )
    } catch (error) {
      toast.error('Thất Bại')
    }
            
    }
///Category
    useEffect(() => {
      const getCategories = async () => {
        try {
          const {data: categories} = await getAllcate()
          setCategories(categories)
        } catch (error) {
            console.log(error);
        }
      }
      getCategories()
    },[])
    const onHandleAddcate = (category: ICategory) => {
            try {
              insertcate(category).then((response: AxiosResponse) => {
                setCategories([...categories, response.data]);
                toast.success("Thêm danh mục thành công")
              });
            } catch (error) {
                  toast.error('Không thành công')
            }
      
    };
    const onHandleRemove = (id: Number) => {
      try {
        removecate(id)
        setCategories(categories.filter(item =>item.id !== id))
        toast.success('Xoá thành công')
      } catch (error) {
            toast.error('Xoá không thành công')
      }
    
    };
    const onHandleChange = (category :ICategory) => {
              
          try {
              updatecate(category.id,category)
              .then((response: AxiosResponse) => {
                const newcate = categories.map(item => item.id === response.data.id ? response.data : item)
                setCategories(newcate)
                toast.success('Sửa thành công')
              }  )
          } catch (error) {
            toast.error('Thất Bại')
          }
          
    }
  return (
    <div  id='wapper' >
      <Routers products={products}
       categories = {categories}
        onAddcate ={onHandleAddcate}
        onRemove={onHandleRemove}
        onChangecate ={onHandleChange}
        onAddprd={onHandleAddprd}
        onRemoveprd = {onHandleRemoveprd}
        onChangeprd= {onHandleChangeprd}
           /> 
      <ToastContainer />

    </div>
  );
}

export default App;
