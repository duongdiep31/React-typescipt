import React from "react"
import { Link } from "react-router-dom"
import { ICategory, IProduct } from "../../model/props"
type Props = {
  categories: ICategory[],
  products: IProduct[]
}
const Trending: React.FC<Props> = (props) => {
  console.log(props);
  
    return (
        <section className="py-5">
        <header>
          <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">
          {/* PRODUCT*/}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></Link>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-outline-dark" to="#"><i className="far fa-heart" /></Link></li>
                    <li className="list-inline-item m-0 p-0"><Link className="btn btn-sm btn-dark" to="cart.html">Add to cart</Link></li>
                    <li className="list-inline-item mr-0"><Link className="btn btn-sm btn-outline-dark" to="#productView" data-toggle="modal"><i className="fas fa-expand" /></Link></li>
                  </ul>
                </div>
              </div>
              <h6> <Link className="reset-anchor" to="detail.html">Kui Ye Chen’s AirPods</Link></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-primary">Sale</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></Link>
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-" /><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></Link>
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-info">New</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></Link>
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-danger">Sold</div><Link className="d-block" to="detail.html"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..." /></Link>
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
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
        </div>
      </section>
    )
}
export default Trending