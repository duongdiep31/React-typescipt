import React, { useEffect, useState } from 'react';
import { getAllcate, insertcate, removecate, updatecate } from './api/categories';
import './App.css';
import Routers from './Routers';
import { ICategory, IProduct} from './model/props'
import {AxiosResponse} from 'axios'

  function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])

    // useEffect(() => {
    //   const getProducts = async  () => {
    //     try {
    //       const {data: products} = await getAll()
          
    //       setProducts(products)
    //     }catch(error){
    //         console.log(error)
    //     }
    //   }
    //   getProducts()
    // },[])


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
  
      insertcate(category).then((response: AxiosResponse) => {
        // cập nhật lại state product để hiển thị ra màn hình kết quả mới
        setCategories([...categories, response.data]);
      });
    };

    const onHandleRemove = (id: Number) => {
      removecate(id)
        setCategories(categories.filter(item =>item.id !== id))
    };
    
    const onHandleChange = (category :ICategory) => {


          
    }
  return (
    <div  id='wapper' >
            
      <Routers products={products}
       categories = {categories}
        onAddcate ={onHandleAddcate}
        onRemove={onHandleRemove}
        onChangecate ={onHandleChange}
           /> 

    </div>
  );
}

export default App;
