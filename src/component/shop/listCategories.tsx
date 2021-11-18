import React from "react"
import { Link } from "react-router-dom"
const ClistCategories = () => {
    return(
        <React.Fragment>
            <h5 className="text-uppercase mb-4">Categories</h5>
            <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase font-weight-bold">Fashion &amp; Acc</strong></div>
            <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
              <li className="mb-2"><Link className="reset-anchor" to="#">Women's T-Shirts</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Men's T-Shirts</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Dresses</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Novelty socks</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Women's sunglasses</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Men's sunglasses</Link></li>
            </ul>
            <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Health &amp; Beauty</strong></div>
            <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
              <li className="mb-2"><Link className="reset-anchor" to="#">Shavers</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">bags</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Cosmetic</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Nail Art</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Skin Masks &amp; Peels</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Korean cosmetics</Link></li>
            </ul>
            <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">Electronics</strong></div>
            <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
              <li className="mb-2"><Link className="reset-anchor" to="#">Electronics</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">USB Flash drives</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Headphones</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Portable speakers</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Cell Phone bluetooth headsets</Link></li>
              <li className="mb-2"><Link className="reset-anchor" to="#">Keyboards</Link></li>
            </ul>
        </React.Fragment>
    )
}
 export default ClistCategories