import React from 'react';
import PortfolioTitle from './PortfolioTitle';
import PortfolioSlider from './PortfolioSlider';
import IPortfolio from '../../interfaces/IPortfolio';

/**
 * Portfolio which contains title and slider.
 */
const Portfolio: React.FC<IPortfolio> = (props) => (
    <div className="portfolio">
        <PortfolioTitle
            headerText={props.title.headerText}
            paragraphText={props.title.paragraphText}
        />
        <PortfolioSlider
            items={props.items}
        />
    </div>
);

export default Portfolio;
