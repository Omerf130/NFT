import React from "react";
import aboutCSS from './../About/About.module.css'

function About () {
  return (
    <div className={`${aboutCSS.About_wrapper} section`} id="about">
      <h2 className="Section_Title"><span>About</span> Us</h2>
      <p className={aboutCSS.section_paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, illo fuga blanditiis expedita corporis laborum repellendus dolores, soluta suscipit temporibus voluptates nesciunt autem quasi alias vero! Facere consectetur officia soluta.</p>
      <div className={aboutCSS.Counters}>
        <p className="Counters"><span>2024+</span> Total Items</p>
        <p className="Counters"><span>20000+</span> WhiteList Profiles</p>
      </div>
      <div className={aboutCSS.AboutCards}>
        <div className={`${aboutCSS.About_card} card`} count='1'>
          <span></span>
          <span></span>
          <h2>High Quaility</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque fuga dolores.</p>
        </div>
        <div className={`${aboutCSS.About_card} card`} count='2'>
          <span></span>
          <span></span>
          <h2>Big Collection</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda ipsa est!</p>
        </div>
        <div className={`${aboutCSS.About_card} card`} count='3'>
          <span></span>
          <span></span>
          <h2>Top Resource</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur eaque nemo.</p>
        </div>
        <div className={`${aboutCSS.About_card} card`} count='4'>
          <span></span>
          <span></span>
          <h2>Big Community</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore rerum qui.</p>
        </div>
      </div>
    </div>
  )
}

export default About
