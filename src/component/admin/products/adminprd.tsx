import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { Rootstate } from "../../../Store";
import { itemPrd } from "../../../Store/action/productsAction";
const ListAdminprd = () => {


                const dispatch = useDispatch()
                const product = useSelector((state: Rootstate) => state.product.product
                )
                useEffect(() => {
                  dispatch(itemPrd())
                },[dispatch])
                let Result
                if (product) {
                         Result =  product.map((item,index) => {   
                            return(
                              <React.Fragment key ={index} > 
                              <tr>
                            <td>{index +1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td style ={{width:'20%', height:'20%'}} >
                              <img src ={item.image} alt= {'...'} style ={{width: '100%',height: '20%'}} /></td>
                            <td><Link style={{borderRadius: "20px"}} to={`/admin/Changeprd/${item._id}`}id="change" className="btn btn-success shadow btn-xs sharp mr-1" >
                                <i className="fas fa-pencil-alt"></i></Link>
                              {/* <button
                                 onClick={() => props.onRemoveprd(item.id)}
                                style={{
                                  borderRadius: '20px',
                                  backgroundColor: '#AA0000'
                                }} 
                                id="remove" 
                              className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button> */}
                            </td>
                          </tr>
                          </React.Fragment>
                            )        
                   })
                }
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