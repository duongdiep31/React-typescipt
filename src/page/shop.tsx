import React from "react"
import ClistCategories from "../component/shop/listCategories"
import CListPrd from "../component/shop/listProducts"
import { Link } from "react-router-dom"
import { ICategory, IProduct } from "../model/props"
    type Props = {
      products: IProduct[],
      categories: ICategory[]
    }
const Shop: React.FC<Props> = (props) => {

    return(
      
        <React.Fragment>
            <div>
  <div className="modal fade" id="productView" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row align-items-stretch">
            <div className="col-lg-6 p-lg-0"><Link className="product-view d-block h-100 bg-cover bg-center" style={{background: 'url(img/product-5.jpg)'}} to="img/product-5.jpg" data-lightbox="productview" title="Red digital smartwatch" /><Link className="d-none" to="img/product-5-alt-1.jpg" title="Red digital smartwatch" data-lightbox="productview" /><Link className="d-none" to="img/product-5-alt-2.jpg" title="Red digital smartwatch" data-lightbox="productview" /></div>
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
  <div className="container">
    {/* HERO SECTION*/}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">Shop</h1>
          </div>
          <div className="col-lg-6 text-lg-right">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container p-0">
        <div className="row">
          {/* SHOP SIDEBAR*/}
          <div className="col-lg-3 order-2 order-lg-1">
                <ClistCategories/>
       
            <h6 className="text-uppercase mb-3">Show only</h6>
            <div className="custom-control custom-checkbox mb-1">
              <input className="custom-control-input" id="customCheck1" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck1">Returns Accepted</label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
              <input className="custom-control-input" id="customCheck2" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck2">Returns Accepted</label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
              <input className="custom-control-input" id="customCheck3" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck3">Completed Items</label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
              <input className="custom-control-input" id="customCheck4" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck4">Sold Items</label>
            </div>
            <div className="custom-control custom-checkbox mb-1">
              <input className="custom-control-input" id="customCheck5" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck5">Deals &amp; Savings</label>
            </div>
            <div className="custom-control custom-checkbox mb-4">
              <input className="custom-control-input" id="customCheck6" type="checkbox" />
              <label className="custom-control-label text-small" htmlFor="customCheck6">Authorized Seller</label>
            </div>
            <h6 className="text-uppercase mb-3">Buying format</h6>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" id="customRadio1" type="radio" name="customRadio" />
              <label className="custom-control-label text-small" htmlFor="customRadio1">All Listings</label>
            </div>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" id="customRadio2" type="radio" name="customRadio" />
              <label className="custom-control-label text-small" htmlFor="customRadio2">Best Offer</label>
            </div>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" id="customRadio3" type="radio" name="customRadio" />
              <label className="custom-control-label text-small" htmlFor="customRadio3">Auction</label>
            </div>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" id="customRadio4" type="radio" name="customRadio" />
              <label className="custom-control-label text-small" htmlFor="customRadio4">Buy It Now</label>
            </div>
          </div>
          {/* SHOP LISTING*/}

          <CListPrd {...props}/>
        
        </div>
      </div>
    </section>
  </div>
</div>

        </React.Fragment>
    )
}
export default Shop