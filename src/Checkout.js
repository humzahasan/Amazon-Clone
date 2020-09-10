import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
function Checkout() {
  const [{basket, user}] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg'
          alt='banner2'
        />

        <div>
          <h3>Hey {user?.displayName}</h3>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                key={`nothing${item.id}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
