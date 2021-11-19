import React from "react"
import { NavLink,Link } from "react-router-dom";
import { IProduct } from "../../../model/props";
type Props = {
    products: IProduct[]
    onRemoveprd: (id:number) => void
}
const ListAdminprd: React.FC<Props> = (props) => {
                const products = props.products
                const Result =  products.map((item,index) => {            
                      return(
                        <React.Fragment key ={index} > 
                        <tr>
                      <td>{index +1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td style ={{width:'20%', height:'20%'}} >
                        <img src ={item.image} alt= {'...'} style ={{width: '100%',height: '20%'}} /></td>
                      <td><Link style={{borderRadius: "20px"}} to={`/admin/Changeprd/${item.id}`}id="change" className="btn btn-success shadow btn-xs sharp mr-1" >
                          <i className="fas fa-pencil-alt"></i></Link>
                        <button
                           onClick={() => props.onRemoveprd(item.id)}
                          style={{
                            borderRadius: '20px',
                            backgroundColor: '#AA0000'
                          }} 
                          id="remove" 
                        className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
                      </td>
                    </tr>
                    </React.Fragment>)})
              return ( <div className="card mb-4" id="tables">
                <div className="card-header">List Products</div>
                <div className="card-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Price</th>
                        <th>Image</th>
                        <th>Action</th>
          
                      </tr>
                    </thead>
                    <tbody>
                          {Result}

                    </tbody>
                  </table>
                  <NavLink to='/admin/Addproduct' className='btn btn-primary'> Create </NavLink>
                </div>
              </div>)
}
export default ListAdminprd