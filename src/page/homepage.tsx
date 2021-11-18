import React from "react"
import Categories from "../component/home/categories"
import Trending from "../component/home/trending"
import { Link } from "react-router-dom"
import { ICategory, IProduct } from "../model/props"

  type Props = {
    products: IProduct[],
    categories: ICategory[]

  }

const Homepage: React.FC<Props> = (props) => {
        
  

        return(
            <React.Fragment>
     <div>
  <div className="modal fade" id="productView" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row align-items-stretch">
            <div className="col-lg-6 p-lg-0">
              <Link className="product-view d-block h-100 bg-cover bg-center" style={{background: 'url(img/product-5.jpg)'}} to="img/product-5.jpg" data-lightbox="productview" title="Red digital smartwatch" />
              <Link className="d-none" to="img/product-5-alt-1.jpg" title="Red digital smartwatch" data-lightbox="productview" />
              <Link className="d-none" to="img/product-5-alt-2.jpg" title="Red digital smartwatch" data-lightbox="productview" />
              </div>
            <div className="col-lg-6">
              <button className="close p-4" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className="p-5 my-md-4">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                </ul>
                <h2 className="h4">Red digital smartwatch</h2>
                <p className="text-muted">$250</p>
                <p className="text-small mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                <div className="row align-items-stretch mb-4">
                  <div className="col-sm-7 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                      <div className="quantity">
                        <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                        <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue={1} />
                        <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-sm-0"><Link className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" to="cart.html">Add to cart</Link></div>
                </div><Link className="btn btn-link text-dark p-0" to="#"><i className="far fa-heart mr-2" />Add to wish list</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* HERO SECTION*/}
  <div className="container">
    <section className="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{background: 'url(img/hero-banner-alt.jpg)'}}>
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
            <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><Link className="btn btn-dark" to="shop.html">Browse collections</Link>
          </div>
        </div>
      </div>
    </section>
    {/* CATEGORIES SECTION*/}

            <Categories  {...props} />







    {/* TRENDING PRODUCTS*/}

          <Trending  {...props}  />

    {/* SERVICES*/}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use to="#delivery-time-1"> </use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Free shipping</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use to="#helpline-24h-1"> </use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use to="#label-tag-1"> </use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Festival offer</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* NEWSLETTER*/}
    <section className="py-5">
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <h5 className="text-uppercase">Let's be friends!</h5>
            <p className="text-small text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
          </div>
          <div className="col-lg-6">
            <form action="#">
              <div className="input-group flex-column flex-sm-row mb-3">
                <input className="form-control form-control-lg py-3" type="email" placeholder="Enter your email address" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-dark btn-block" id="button-addon2" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

            </React.Fragment>
        )

        
}
export default Homepage