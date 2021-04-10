import React from 'react';
import IPortfolioItem from '../../interfaces/IPortfolioItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Contains image with hover data like header, paragraph texts, and two icons.
 */
const PortfolioItem: React.FC<IPortfolioItem> = (props) => (
    <div className="portfolio-item">
        <img src={props.imageSrc} alt="" />
            <div className="portfolio-hover">
                <div className="portfolio-hover-inner">
                    <h3>{ props.headerText }</h3>
                    <p>{ props.paragraphText }</p>
                    <a href="" className="portfolio-link-left">
                        <FontAwesomeIcon icon={props.icon1} />
                    </a>
                    <a href="" className="portfolio-link-right">
                        <FontAwesomeIcon icon={props.icon2} />
                    </a>
                </div>
            </div>
    </div>
);

export default PortfolioItem;
