import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Portfolio item data.
 */
interface IPortfolioItem {
    imageSrc: string;
    headerText: string;
    paragraphText: string;
    icon1: IconProp;
    icon2: IconProp;
}

export default IPortfolioItem;
