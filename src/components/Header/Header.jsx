import React from "react";
import headerCSS from './../Header/Header.module.css'
import heroImg from './../../assets/hero-img.png'
import element1 from './../../assets/element-star.png'
import { ReactTyped } from "react-typed";


function Header () {
  return (
    <div className={`${headerCSS.Header_wrapper} section`} id="home">
          <span className={headerCSS.element2}></span>
        <div className={headerCSS.Header_content}>
          <h2>with 
            <span>
                <ReactTyped
                  strings={["Omer NFT", "BOXNFT", "NFTBOX"]}
                  typeSpeed={30}
                  backSpeed={60}
                  loop={true}
                >

                </ReactTyped>
            </span> <br />
              Explore NFT <br />
              Collection
          </h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil quis iure tenetur obcaecati placeat eius, sed officia repellendus neque!</p>

          <div className={headerCSS.clients}>
            <p className="Counters">2021+ <span>Clients</span></p>
            <p className="Counters">20000+ <span>Whitelist profiles</span></p>
          </div>

          <div className={headerCSS.header_btns}>
            <button className="btn"><i className="ri-wallet-line"></i> Connect wallet</button>
            <button><i className="ri-links-line"></i> Whitelist Now</button>
          </div>
        </div>
        <div className={headerCSS.Header_image}>
          <img src={heroImg} alt="hero-img" />
          <img src={element1} alt="" id={headerCSS.element1} />
        </div>
    </div>
  )
}

export default Header