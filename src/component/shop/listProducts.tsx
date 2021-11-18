import React from "react"
import { Link } from "react-router-dom"
import { ICategory, IProduct } from "../../model/props"
type Props = {
  categories: ICategory[],
  products: IProduct[]
}
const CListPrd: React.FC<Props> = (props) => {
        const url = "#productView" 
          console.log(props)
        


            return (
      <React.Fragment>
        
        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-small text-muted mb-0">Showing 1–12 of 53 results</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
              <li className="list-inline-item text-muted mr-3"><Link className="reset-anchor p-0" to="#"><i className="fas fa-th-large" /></Link></li>
              <li className="list-inline-item text-muted mr-3"><Link className="reset-anchor p-0" to="#"><i className="fas fa-th" /></Link></li>
              <li className="list-inline-item">
                <select className="selectpicker ml-auto" name="sorting" data-width={200} data-style="bs-select-form-control" data-title="Default sorting">
                  <option value="default">Default sorting</option>
                  <option value="popularity">Popularity</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* PRODUCT*/}
         
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href={url} data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Kui Ye Chen’s AirPods</Link></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Air Jordan 12 gym red</Link></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-primary">New</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Cyan cotton t-shirt</Link></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Timex Unisex Originals</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-info">Sale</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Red digital smartwatch</Link></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-6.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Nike air max 95</Link></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-7.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Joemalone Women prefume</Link></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-8.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Apple Watch</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-danger">Sold</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-9.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Men silver Byron Watch</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-primary">New</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-10.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Ploaroid one step camera</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-11.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Gray Nike running shoes</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-12.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Black DSLR lense</Link></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
        </div>
        {/* PAGINATION*/}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item"><Link className="page-link" to="#" aria-label="Previous"><span aria-hidden="true">«</span></Link></li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#" aria-label="Next"><span aria-hidden="true">»</span></Link></li>
          </ul>
        </nav>
      </div>
      </React.Fragment>
    )
}
export default CListPrd