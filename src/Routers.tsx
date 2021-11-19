import React, { Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Website from "./layout/website";
import Cart from "./page/cart";
import Shop from "./page/shop";
import Homepage from "./page/homepage";
import Info from './component/admin/info'
import Homeadmin from './admin/homeadmin'
import ListCategories from './component/admin/categories/listCategories'
import { ICategory, IProduct } from "./model/props";
import Addcate from './component/admin/categories/addcate'
import Changecate from "./component/admin/categories/changecate";
import ListAdminprd from "./component/admin/products/adminprd";
import Addprd from "./component/admin/products/addproduct";
import Changeprd from "./component/admin/products/changeprd";
import Signup from "./feature/signup";
import Signin from "./feature/signin";
type Props = {
    products: IProduct[]
    categories: ICategory[]
    onAddcate:(category: ICategory) => void
    onRemove: (id: Number) => void;
    onChangecate: (category: ICategory) => void
    onAddprd: (product: IProduct) => void
    onRemoveprd: (id: number) => void
    onChangeprd: (product:IProduct) => void
}
const Routers: React.FC<Props> = (props) => {
    
    return (
       <BrowserRouter>
       <Suspense fallback= {<h1>loadingg......</h1>} >
       <Routes>
            <Route path ='/'  element={<Website  />}  >
                                                                <Route index element= {<Homepage {...props} />} />
                                                                <Route path='/shop' element= {<Shop {...props} />} />
                                                                <Route path='/cart' element= {<Cart/>} />
                                                                <Route  path ='/signup' element ={<Signup/>} />
                                                                <Route  path= '/signin' element={<Signin />} />
                                                                <Route path='/admin/'  element={

                                                                <Homeadmin {...props} />
                                                                } >
                                                                        <Route index element={ <Info {...props} />} />
                                                                        <Route path='category' element = {<ListCategories {...props} />}/>
                                                                        <Route  path='addcategory' element = {<Addcate onAddcate = {props.onAddcate} />} />
                                                                        <Route  path ='changecate/:id' element = {<Changecate onChangecate = {props.onChangecate}  />} /> 
                                                                        <Route  path ='products' element= {<ListAdminprd {...props}  />} />
                                                                        <Route  path ='Addproduct' element= {<Addprd onAddprd={props.onAddprd}  />} />
                                                                        <Route  path ='Changeprd/:id'  element={<Changeprd onChangeprd={props.onChangeprd} />} />
                                                                </Route>
            </Route>
                




            </Routes>
                </Suspense>
       </BrowserRouter>
    )
}
export default Routers