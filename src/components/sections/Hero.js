import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import Logo from '../layout/partials/Logo';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content"  style={{
             top: "25px",position : "relative"
            }}>
              <Link to="/main">
              {window.innerWidth <580?
              <Image
              src={require('../../assets/images/re.png')}
              alt="Open"
              width={32}
              height={98} 
              style ={{position: "relative",left: "-109px"  ,top:"-102px",width:"62px"}}
              
              />
         :  <Image
         src={require('../../assets/images/re.png')}
         alt="Open"
         width={32}
         height={98}  
         style ={{position: "relative",left: "-147px"  ,top:"-102px",width:"62px"}}
         
         />}
        </Link>
        <b><h2  style={{
             margin: "2px",
             position: "relative",
             top: "-155px",
             left: "3px",
        
        }}><Link to="/" >3choices</Link></h2></b>
              <br></br>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
             Not Sure!! What You Looking For?  <br></br><span className="text-color-primary">Don't Worry ,We Got You</span>
            </h1>
            <br></br>
            <ButtonGroup>
               
               <Link to="/login2">
                   <Button tag="a" color="primary" wideMobile style={{ X: "4px" }} >
                   
                       Log In
                     
                   </Button>
 </Link>
                  
               <Link to="/log">
                     <Button tag="a" color="dark" wideMobile>
                       Register
                     </Button>
                   </Link>
                   </ButtonGroup>
               
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600" style={{ margin: "26px" }}>
              
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <Carousel style={{
              position: "relative",
              top: "133px",
              opacity: 0,
              
            }}>
              <Carousel.Item style={{
             top: "67px !important"
            }}>
                <Image
                  className="has-shadow"
                  src="https://source.unsplash.com/996x600/?love,couple"
                  alt="Hero"
                  width={996}
                  height={700} />


              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="has-shadow"
                  src="https://source.unsplash.com/996x600/?love,date"
                  alt="Hero"
                  width={996}
                  height={700} />



              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="has-shadow"
                  src="https://source.unsplash.com/996x600/?love,place"
                  alt="Hero"
                  width={996}
                  height={700} />



              </Carousel.Item>
            </Carousel>

          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section >
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;