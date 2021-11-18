import React from "react"


const Info = (props:any) => {
    

        return(
            <React.Fragment>
        <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                         Name {/* name */}
                    </li>
                    <li className="list-group-item">
                        Email {/* email */}
                    </li>
                    <li className="list-group-item">
                       Role  {/* role */}
                    </li>
                </ul>
            </div>


        <div className="card mb-5">
                <h3 className="card-header">Purschase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name
                    </li>
                    <li className="list-group-item">
                        Email
                    </li>
                    <li className="list-group-item">
                        Role
                    </li>
                </ul>
            </div></React.Fragment>
     
        )
}
export default Info
