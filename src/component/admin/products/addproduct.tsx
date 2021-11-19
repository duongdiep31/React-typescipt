import React, { useState } from "react";
import {useForm, Resolver, SubmitHandler} from 'react-hook-form'
import { useNavigate } from "react-router";
import '../../../firebase/firebase.config'
import{getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL } from "@firebase/storage"

type FormValues = {
    id: any
    name: string;
    image: string;
    price: number
    description: string;
  };
  type Props = {
      onAddprd:(product: FormValues) => void
  }


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
const Addprd: React.FC<Props> = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({ resolver });
            const navigate = useNavigate();
            const [data, setdata] = useState('')

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
                            props.onAddprd(product)
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
           {/* {errors?.name && <p>{errors.name}</p>} */}
         </div>
         <div className="form-group">
           <label htmlFor="price">Price</label>
           <input {...register('price', {required:true})}   className="form-control" id="price" type="text" placeholder="Price Product" />
           {/* {errors?.name && <p>{errors.name}</p>} */}
         </div>
         <div className="form-group">
           <label htmlFor="description">Description</label>
           <textarea  {...register('description', {required:true})}  className="form-control" id="description" placeholder="Description Product" />
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