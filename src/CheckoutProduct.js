import React, {forwardRef} from 'react';
import './CheckoutProduct.css';

import {v4 as uuidv4} from 'uuid';
import {useStateValue} from './StateProvider';
const CheckoutProduct = forwardRef(
  ({id, image, title, price, rating, key}, ref) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    };

    return (
      <div ref={ref} className='checkoutProduct'>
        <img src={image} alt='prod' className='checkoutProduct__image' />

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className='checkoutProduct__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={uuidv4()}>
                  <span role='img' aria-label='star'>
                    🌟
                  </span>
                </p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
