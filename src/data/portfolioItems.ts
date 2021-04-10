import IPortfolioItem from '../interfaces/IPortfolioItem';
import owl1Image from '../images/owl_slider/owl1.jpg';
import owl2Image from '../images/owl_slider/owl2.jpg';
import owl3Image from '../images/owl_slider/owl3.jpg';
import owl4Image from '../images/owl_slider/owl4.jpg';
import owl5Image from '../images/owl_slider/owl5.jpg';
import { faSearch, faFileImage } from '@fortawesome/free-solid-svg-icons';

const portfolioItem1: IPortfolioItem = {
    imageSrc: owl1Image,
    headerText: 'Example project 1',
    paragraphText: 'March 17th 2017',
    icon1: faSearch,
    icon2: faFileImage
}

const portfolioItem2: IPortfolioItem = {
    imageSrc: owl2Image,
    headerText: 'Example project 2',
    paragraphText: 'July 25th 2018',
    icon1: faSearch,
    icon2: faFileImage
}

const portfolioItem3: IPortfolioItem = {
    imageSrc: owl3Image,
    headerText: 'Example project 3',
    paragraphText: 'December 8th 2017',
    icon1: faSearch,
    icon2: faFileImage
}

const portfolioItem4: IPortfolioItem = {
    imageSrc: owl4Image,
    headerText: 'Example project 4',
    paragraphText: 'May 12th 2018',
    icon1: faSearch,
    icon2: faFileImage
}

const portfolioItem5: IPortfolioItem = {
    imageSrc: owl5Image,
    headerText: 'Example project 5',
    paragraphText: 'September 27th 2019',
    icon1: faSearch,
    icon2: faFileImage
}

const portfolioItems: IPortfolioItem[] = [
    portfolioItem1,
    portfolioItem2,
    portfolioItem3,
    portfolioItem4,
    portfolioItem5
]

export default portfolioItems;
