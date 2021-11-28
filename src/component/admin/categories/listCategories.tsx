import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { Rootstate } from "../../../Store"
import { itemCate } from "../../../Store/action/categoriesAction"

const ListCategories = ( ) => {
  const dispatch = useDispatch()
  const category = useSelector((state: Rootstate) => state.category.category)
  useEffect(() => {
    dispatch(itemCate())
  },[dispatch])
          


        const Result = category.map((item ,index ) => {
                  console.log(item)
                  
            return(
              <React.Fragment key ={index} > 
                  
                <tr>
              <td>{index +1}</td>
              <td>{item.name}</td>
              <td style ={{width:'20%', height:'20%'}} >
                <img src ={item.image} alt= {'...'} style ={{width: '100%',height: '20%'}} /></td>
              <td><Link style={{borderRadius: "20px"}} to={`/admin/changecate/${item._id}`}id="change" className="btn btn-success shadow btn-xs sharp mr-1" >
                  <i className="fas fa-pencil-alt"></i></Link>
                <button
                    // onClick={() => props.onRemove(item.id)}
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#AA0000'
                  }} 
                  id="remove" 
              
                className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
            </React.Fragment>
            )})


  return (
    <div className="card mb-4" id="tables">
      <div className="card-header">List Cagories</div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Image</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {Result}
          </tbody>
        </table>
        <NavLink to='/admin/addcategory' className='btn btn-primary'> Create </NavLink>
      </div>
    </div>
  )
}
export default ListCategories