import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1x_Echo_Dot._CB428276184_.jpg'
          alt='banner'
        />

        <div className='home__row'>
          <Product
          id={111}
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
            price={615.0}
            image='https://m.media-amazon.com/images/I/41Q419CMtfL._AC_UY218_.jpg'
            rating={5}
          />
          <Product
           id={112}
            title='Zero to One: Notes on Start Ups, or How to Build the Future'
            price={208.0}
            image='https://m.media-amazon.com/images/I/71uAI28kJuL._AC_UY218_.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
           id={223}
            title='Apple iPad Mini (Wi-Fi + Cellular, 64GB) - Space Grey'
            price={45900.0}
            image='https://m.media-amazon.com/images/I/71TJA+sJv2L._AC_UY218_.jpg'
            rating={5}
          />
          <Product
           id={221}
            title='Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit'
            price={264990.0}
            image='https://m.media-amazon.com/images/I/81KniKQ71CL._AC_UY218_.jpg'
            rating={5}
          />
          <Product
           id={222}
            title='LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)
            '
            price={774990}
            image='https://m.media-amazon.com/images/I/81s0JxBkzRL._AC_UY218_.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
           id={331}
            title='HP Pavilion x360 core i7 10th Gen 14 inch FHD Touchscreen Laptop with Alexa Built-in (16GB/1TB SSD/Windows 10/MS Office 2019/Finger Print Reader/Natural Silver/1.61kg), 14-dw0071tu'
            price={100596.0}
            image='https://m.media-amazon.com/images/I/61EQwsTKioL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
