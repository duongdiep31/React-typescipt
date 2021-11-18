import React from "react"
import { Link, NavLink } from "react-router-dom"
import { ICategory } from '../../../model/props'

 type Props = {
     categories: ICategory[]
     onRemove : (id:Number) => void
 }
const ListCategories: React.FC<Props> = (props ) => {
                
        const Result = props.categories.map((item ,index ) => {
                
            return(
              <React.Fragment key ={index} > 
                  
                <tr>
              <td>{index +1}</td>
              <td>{item.name}</td>
              <td>Are formatted like this</td>

              <td>
                <Link style={
                  {
                    borderRadius: "20px"
                  }
                } to={`/admin/changecate/${item.id}`}
                
                
                id="change" 
                className="btn btn-success shadow btn-xs sharp mr-1"
                >
                  <i className="fas fa-pencil-alt"></i></Link>
                <button
                    onClick={() => props.onRemove(item.id)}
                  style={{
                    borderRadius: '20px',
                    backgroundColor: '#AA0000'
                  }}
                     
                  id="remove" 
              
                className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
              </td>
            </tr></React.Fragment>
             

            )

        })


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