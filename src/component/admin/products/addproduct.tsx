import React, { useEffect, useState } from "react";
import {useForm, Resolver, SubmitHandler} from 'react-hook-form'
import { useNavigate } from "react-router";
import '../../../firebase/firebase.config'
import{getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "@firebase/storage"
import { useDispatch, useSelector } from "react-redux";
import { createPrd } from "../../../Store/action/productsAction";
import { itemCate } from "../../../Store/action/categoriesAction";
import { Rootstate } from "../../../Store";

type FormValues = {
    id: any
    name: string;
    image: string;
    price: number
    category: number
    description: string;
  };
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required."
            }
          }
        : {}
    };
  };
const Addprd = () => {
         const dispatch = useDispatch()
          const category = useSelector((state: Rootstate) => state.category.category)
          
          useEffect(() => {
            dispatch(itemCate())
          },[dispatch])
         
       const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({ resolver });
            const navigate = useNavigate();
            const [data, setdata] = useState('')     
       


            
            const op = category.map((item,index) => {

              
              return(
                <React.Fragment
                key={index}
                >    
                 <option value= {item._id} >
                  {item.name}
                </option></React.Fragment>
           
              )
            })             
            const handleImage = (url: any) => {
                
                    const storage = getStorage();  
                    const img = url.target.files[0];
                    let storageRef = ref(storage, `categoriesImage/${img.name}`)
                    const uploadTask = uploadBytesResumable(storageRef, img);
                    uploadBytes(storageRef,img)
                    .then(async () => {
                      getDownloadURL(uploadTask.snapshot.ref)
                      .then(async (download) => {
                        await setdata(download)
                      })
                    } ) 

            }
            const onSubmit: SubmitHandler<FormValues> = (product) => {
                            product.image = data
                            console.log('add', product);
                            
                            dispatch(createPrd(product))
                            navigate('/admin/products', {replace:true}   )
            }


    return (
        <div className="card mb-4" id="forms">
   <div className="card-header">Create Product</div>
   <div className="card-body">
     <form onSubmit={handleSubmit(onSubmit)} >
       <fieldset>
         <div className="form-group">
           <label htmlFor="name">Name</label>
           <input {...register('name', {required:true})}  className="form-control" id="name" type="text" placeholder="Name Product" />
           {errors?.name && <p>{errors.name}</p>}
         </div>
         <div className="form-group">
           <label htmlFor="price">Price</label>
           <input {...register('price', {required:true})}   className="form-control" id="price" type="text" placeholder="Price Product" />
           {errors?.name && <p>{errors.name}</p>}
         </div>
         <div className="form-group">
           <label htmlFor="description">Description</label>
           <textarea  {...register('description', {required:true})}  className="form-control" id="description" placeholder="Description Product" />
           {/* {errors?.name && <p>{errors.name}</p>} */}
         </div>
         <div className="form-group">
           <label htmlFor="category">Category</label>
           <select {...register('category', {required:true})} name="category" id="category">
                  {op}
           </select>
           {/* {errors?.name && <p>{errors.name}</p>} */}
         </div>
         <div className="form-group">
           <label htmlFor="image">Image</label>
           <input onChange={handleImage} className="form-control" id="image" type="file"  />
         </div>
       
         <button disabled= {!data} className="btn btn-primary" type="submit">Submit</button>
       </fieldset>
     </form>
     <hr className="my-5" />
     
 </div>
 </div>
    )
}
export default Addprd