import React from 'react';
import PortfolioItem from './PortfolioItem';
import IPortfolioSlider from '../../interfaces/IPortfolioSlider';

/**
 * Portfolio slider which contains portfolio items.
 */
const PortfolioSlider: React.FC<IPortfolioSlider> = (props) => (
    <div className="portfolio-slider">
        <div className="container">
            <div id="portfolio-carousel" className="owl-carousel">
                {
                    props.items.map((portfolioItem, i) => (
                        <PortfolioItem
                            key={i}
                            imageSrc={portfolioItem.imageSrc}
                            headerText={portfolioItem.headerText}
                            paragraphText={portfolioItem.paragraphText}
                            icon1={portfolioItem.icon1}
                            icon2={portfolioItem.icon2}
                        />
                    ))
                }
            </div>
        </div>
    </div>
);

export default PortfolioSlider;
