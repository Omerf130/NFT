import React from "react";
import partnerCSS from './../Partners/Partner.module.css'
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import PartnerImg1 from './../../assets/partner-1.png'
import PartnerImg2 from './../../assets/partner-2.png'
import PartnerImg3 from './../../assets/partner-3.png'
import PartnerImg4 from './../../assets/partner-4.png'
import PartnerImg5 from './../../assets/partner-5.png'
import PartnerImg6 from './../../assets/partner-6.png'
import PartnerImg7 from './../../assets/partner-7.png'
import PartnerImg8 from './../../assets/partner-8.png'


function Partner () {
  return (
      <div className={`${partnerCSS.Partners_wrapper} section`} id="partner">
          <Splide
            options={
              {
                type:'loop',
                perPage: 5,
                focus:'center',
                drag:'free',
                gap:'1rem',
                autoscroll:{
                    speed:1
                },
                pagination:false,
                arrows:false
              }
            }

            extensions={{AutoScroll}}
          >
            <SplideSlide>
                <img src={PartnerImg1} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg2} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg3} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg4} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg5} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg6} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg7} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg8} alt="" />
            </SplideSlide>
          </Splide>
          <Splide
            options={
              {
                type:'loop',
                direction:'rtl',
                perPage: 5,
                focus:'center',
                drag:'free',
                gap:'1rem',
                autoscroll:{
                    speed:1
                },
                pagination:false,
                arrows:false
              }
            }

            extensions={{AutoScroll}}
          >
            <SplideSlide>
                <img src={PartnerImg1} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg2} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg3} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg4} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg5} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg6} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg7} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg8} alt="" />
            </SplideSlide>
          </Splide>
          <Splide
            options={
              {
                type:'loop',
                perPage: 5,
                focus:'center',
                drag:'free',
                gap:'1rem',
                autoscroll:{
                    speed:1
                },
                pagination:false,
                arrows:false
              }
            }

            extensions={{AutoScroll}}
          >
            <SplideSlide>
                <img src={PartnerImg1} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg2} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg3} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg4} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg5} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg6} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg7} alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src={PartnerImg8} alt="" />
            </SplideSlide>
          </Splide>
      </div>
  )
}

export default Partner