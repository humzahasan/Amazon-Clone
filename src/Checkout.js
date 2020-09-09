import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <>
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            className='checkout__ad'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg'
            alt='banner2'
          />

          <div>
            <h2 className='checkout__title'>Shopping Cart</h2>
          </div>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
     
    </>
  );
}

export default Checkout;
