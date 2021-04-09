import ISlide from '../interfaces/ISlide';
import sliderPhone from '../images/slider-phone.png';
import sliderTablet from '../images/slider-tablet.png';

const slide1: ISlide = {
    headerText: 'Fully responsive project',
    paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linkText: 'Look',
    imageSrc: sliderPhone
};

const slide2: ISlide = {
    headerText: 'Based on LESS',
    paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linkText: 'Look',
    imageSrc: sliderTablet
};

const slides: ISlide[] = [
    slide1,
    slide2
]

export default slides;
