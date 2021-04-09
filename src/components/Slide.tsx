import React from 'react';
import ISlide from '../interfaces/ISlide'

/**
 * Contains slide with header text, paragraph, link and image.
 */
const Slide = (props: ISlide) => {
    return (
        <div className="main-slide-1">
            <div className="container">
                <div className="main-slider-content">
                    <h1 className="animated fadeInDown">{ props.headerText }</h1>
                    <p className="animated fadeInLeft">{ props.paragraphText }</p>
                    <a href="/" className="animated fadeInUp">{ props.linkText }</a>
                    <img src={props.imageSrc} alt="" className="animated fadeInDown" />
                </div>
            </div>
        </div>
    );
}

export default Slide;
