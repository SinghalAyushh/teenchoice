import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hoc from "./hoc/hoc";

import Chat from "./containers/Chat";

import { Carousel } from 'react-bootstrap'
import Pikachu from './components/layout/pikachu';
const heigt = window.innerWidth > 580 ? 400 : 700
const wt = window.innerWidth > 580 ? 1880 : 1000

const Bas = () => (

    <Carousel className="carousel-fade" style={{ top: "-266px", position: "relative" }}
    >

        <Carousel.Item>

            <img

                src="https://source.unsplash.com/996x600/?love,place"
                alt="Third slide"
                width={wt}
                height={heigt}
            />
            <Pikachu />


        </Carousel.Item>
        <Carousel.Item>
            <img

                src="https://source.unsplash.com/996x600/?love,marriage"
                alt="Third slide"
                width={wt}
                height={heigt}
            />
            <Pikachu />


        </Carousel.Item>
        <Carousel.Item>

            <img

                src="https://source.unsplash.com/996x600/?new,couple"
                alt="Third slide"
                width={wt}
                height={heigt}
            />
            <Pikachu />


        </Carousel.Item>
    </Carousel>

);

export default Bas;