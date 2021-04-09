import IService from '../interfaces/IService';
import Animate from '../enums/Animate';
import { faChartLine, faShoppingCart, faBatteryFull, faSmile } from '@fortawesome/free-solid-svg-icons';

const service1: IService = {
    animate: Animate.FadeInLeft,
    icon: faChartLine,
    headerText: 'SEO',
    paragraphText: 'Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut.',
};

const service2: IService = {
    animate: Animate.FadeInUp,
    icon: faShoppingCart,
    headerText: 'Sale',
    paragraphText: 'Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut.',
};

const service3: IService = {
    animate: Animate.FadeInUp,
    icon: faBatteryFull,
    headerText: 'Power',
    paragraphText: 'Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut.',
};

const service4: IService = {
    animate: Animate.FadeInRight,
    icon: faSmile,
    headerText: 'Satisfaction',
    paragraphText: 'Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut.',
};

const services: IService[] = [
    service1,
    service2,
    service3,
    service4
]

export default services;
