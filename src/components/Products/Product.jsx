import React from "react";
import productCSS from './../Products/Product.module.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ProductImg1 from './../../assets/product1.jpg'
import ProductImg2 from './../../assets/product2.jpg'
import ProductImg3 from './../../assets/product3.jpg'
import ProductImg4 from './../../assets/product4.jpg'
import ProductImg5 from './../../assets/product5.jpg'
import ProductImg6 from './../../assets/product6.jpg'
import ProductImg7 from './../../assets/product7.jpg'
import ProductImg8 from './../../assets/product8.jpg'
import ProductImg9 from './../../assets/product9.jpg'
import ProductImg10 from './../../assets/product10.jpg'
import ProductImg11 from './../../assets/product11.jpg'


function Product () {
  return (
    <div className={productCSS.Product_wrapper} id="products">
        <Splide
            options={{
              perPage:5,
              gap:'2rem',
              type:'loop',
              focus:'center',
              drag:'free',
              autoScroll:{
                speed:1
              },
              breakpoints:{
                500:{
                   perPage:1 
                },
                768:{
                  perPage:2 
               },
               1100:{
                perPage:3 
               },
               1300:{
                perPage:4 
               },
               1400:{
                perPage:5 
               }
             
              },
              pagination:false
            }}
            extensions={{AutoScroll}}
        >
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg1} alt="" />
                <h2>SkeletIn #01</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg2} alt="" />
                <h2>SkeletIn #02</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg3} alt="" />
                <h2>SkeletIn #03</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg4} alt="" />
                <h2>SkeletIn #04</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg5} alt="" />
                <h2>SkeletIn #05</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg6} alt="" />
                <h2>SkeletIn #06</h2>
            </div>
          </SplideSlide>
        </Splide>
        <Splide
            options={{
              perPage:5,
              direction:'rtl',
              gap:'2rem',
              type:'loop',
              focus:'center',
              drag:'free',
              autoScroll:{
                speed:1
              },
              pagination: false

            }}
            extensions={{AutoScroll}}
        >
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg1} alt="" />
                <h2>SkeletIn #01</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg2} alt="" />
                <h2>SkeletIn #02</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg3} alt="" />
                <h2>SkeletIn #03</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg4} alt="" />
                <h2>SkeletIn #04</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg5} alt="" />
                <h2>SkeletIn #05</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg6} alt="" />
                <h2>SkeletIn #06</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg7} alt="" />
                <h2>SkeletIn #07</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg8} alt="" />
                <h2>SkeletIn #08</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg9} alt="" />
                <h2>SkeletIn #09</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg10} alt="" />
                <h2>SkeletIn #010</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg11} alt="" />
                <h2>SkeletIn #11</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
                <img src={ProductImg3} alt="" />
                <h2>SkeletIn #03</h2>
            </div>
          </SplideSlide>
        </Splide>
    </div>
  )
}

export default Product