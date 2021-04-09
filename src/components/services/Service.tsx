import React from 'react';
import IService from '../../interfaces/IService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Contains icon, header text and paragraph.
 */
const Service: React.FC<IService> = (props: IService) => {
    return (
        <div className="single-col" data-animate={props.animate}>
            <span>
                <FontAwesomeIcon icon={props.icon} />
            </span>
            <h3>{ props.headerText }</h3>
            <p>{ props.paragraphText }</p>
        </div>
    );
}

export default Service;
