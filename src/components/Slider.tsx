import React from 'react';
import ISlide from '../interfaces/ISlide';
import Slide from './Slide';

/**
 * Contains slider with different slides.
 */
const Slider: React.FC<{ slides: ISlide[] }> = ({ slides }) => {

    return (
        <div className="top-slider">
            <ul className="bxslider" id="main-slider">
                {
                    slides.map((slide, i) =>
                        <li key={i}>
                            <Slide
                                headerText={slide.headerText}
                                paragraphText={slide.paragraphText}
                                linkText={slide.linkText}
                                imageSrc={slide.imageSrc}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Slider;
