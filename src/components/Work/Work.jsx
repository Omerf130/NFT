import React from "react";
import workCSS from './../Work/Work.module.css'
import cardImg1 from './../../assets/work-1.svg'
import cardImg2 from './../../assets/work-2.svg'
import cardImg3 from './../../assets/work-3.svg'
import cardImg4 from './../../assets/work-4.svg'


function Work () {
  return (
    <div className={`${workCSS.Work_Wrapper} section`}>
      <h2 className="Section_Title">How to <span>Omer NFT</span> Work</h2>

      <div className={workCSS.Cards}>
        <div className={`${workCSS.Card} card`}>
          <span></span>
          <span></span>

          <img src={cardImg1} alt="" />
          <h3>Collect The Wallet</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.</p>
        </div>
        <div className={`${workCSS.Card} card`}>
          <span></span>
          <span></span>

          <img src={cardImg2} alt="" />
          <h3>Select The Quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.</p>
        </div>
        <div className={`${workCSS.Card} card`}>
          <span></span>
          <span></span>

          <img src={cardImg3} alt="" />
          <h3>Confirm The Transaction</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.</p>
        </div>
        <div className={`${workCSS.Card} card`}>
          <span></span>
          <span></span>

          <img src={cardImg4} alt="" />
          <h3>Recieve Your NFT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Work