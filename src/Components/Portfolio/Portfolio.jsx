import React from "react";
import './Portfolio.css'
import {Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HDC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'
import {themeContext} from '../../Contexte'
import { useContext } from "react";
import Dashboard from '../../img/dashboard.png'
import projet1 from '../../img/projet1.png'
import tasty from '../../img/tasty2.png'
import lock from '../../img/lock.png'
import responsive from '../../img/responsive.png'
import formulaire from '../../img/formulaire.png'
import respace from '../../img/respace.png'



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">

            {/* heading */}
            <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
            <span>Portfolio </span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Dashboard} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={projet1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={tasty} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={respace} alt="" />
                </SwiperSlide>

            </Swiper>
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={responsive} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={lock} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={formulaire} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Portfolio;