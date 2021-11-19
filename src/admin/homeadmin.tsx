import React from "react"
import {  Link,Outlet } from "react-router-dom"
import { ICategory, IProduct } from "../model/props"

type Props = {
    categories: ICategory[],
    products: IProduct[]
  }
const Homeadmin: React.FC<Props> = (props) => {
    return(
    <div className='container' > 
    
    <div className="row">
    <div className="col-3">
                <div className="card">
                
                                    <h4 className="card-header">Menu</h4>
                                    <ul className="list-group">
                                    <li className="list-group-item">
                                            <Link className="nav-link" to="/admin/">Dashboard</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link className="nav-link" to="/admin/category">Category</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link className="nav-link" to="/admin/products">Product</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link className="nav-link" to={`/profile/update/`}>Update Profile</Link>
                                        </li>
                                    </ul>
                              
                        
                    <div/>

                </div>
    

    </div>

    <div className="col-9">
        {/* info */}
   {
                <Outlet/>
            
        }
    </div>
     
</div>

</div>
    
   )
}
export default Homeadmin