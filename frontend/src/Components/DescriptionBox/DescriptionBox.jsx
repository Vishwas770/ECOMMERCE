import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="description-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An eCommerce website is an online platform where businesses can sell products or services directly to consumers over the internet. It serves as a digital storefront, allowing customers to browse products, add items to a shopping cart, and complete purchases through an integrated payment system.
                </p>
                <p>

                    An eCommerce platform is an online system that allows businesses to conduct transactions and sell products or services over the internet. It includes everything needed to operate an online store, from showcasing products to processing payments and managing shipping.
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox
