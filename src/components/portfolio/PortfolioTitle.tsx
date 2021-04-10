import React from 'react';
import IPortfolioTitle from '../../interfaces/IPortfolioTitle';

/**
 * Contains portfolio title which contains header and paragraph texts.
 */
const PortfolioTitle: React.FC<IPortfolioTitle> = (props) => (
    <div className="section-title">
        <div className="container">
            <h2>{ props.headerText }</h2>
            <p>{ props.paragraphText }</p>
        </div>
    </div>
);

export default PortfolioTitle;
