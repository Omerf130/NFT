import React from "react";
import teamCSS from './../Team/Team.module.css'
import TeamImg1 from './../../assets/team-1.jpg'
import TeamImg2 from './../../assets/team-2.jpg'
import TeamImg3 from './../../assets/team-3.jpg'
import TeamImg4 from './../../assets/team-4.jpg'
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css'

function Team () {
  return (
    <div className={`${teamCSS.Team_Wrapper} section`} id="team">
        <h2 className="Section_Title">Our <span>Team</span></h2>

        <div className={teamCSS.TeamsCards}>
          <Splide
            options={
              {
                type:'loop',
                perPage: 4,
                gap: '3rem',
                breakpoints:{
                  768:{
                    perPage:1
                  },
                  900:{
                    perPage:2
                  },
                  1024:{
                    perPage:3
                  },
                  1400:{
                    perPage:4
                  }
                }

              }
            }
          >
            <SplideSlide>
                <div className={`${teamCSS.TeamCard} card`}>
                    <span></span>
                    <span></span>
                    <img src={TeamImg1} alt="" />

                        <h3>Eli Cohen <small>Founder</small></h3>

                    <div className={teamCSS.social}>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-twitter-x-line"></i>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={`${teamCSS.TeamCard} card`}>
                    <span></span>
                    <span></span>
                    <img src={TeamImg2} alt="" />

                        <h3>Amanda Bolerow <small>Co-Founder</small></h3>

                    <div className={teamCSS.social}>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-twitter-x-line"></i>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={`${teamCSS.TeamCard} card`}>
                    <span></span>
                    <span></span>
                    <img src={TeamImg3} alt="" />

                        <h3>Josh Joseph <small>Head-cheif</small></h3>

                    <div className={teamCSS.social}>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-twitter-x-line"></i>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={`${teamCSS.TeamCard} card`}>
                    <span></span>
                    <span></span>
                    <img src={TeamImg4} alt="" />

                        <h3>Gil Galili <small>Manager</small></h3>

                    <div className={teamCSS.social}>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-twitter-x-line"></i>
                    </div>
                </div>
            </SplideSlide>
          </Splide>
        </div>
    </div>
  )
}

export default Team