import React from 'react';
import IService from '../../interfaces/IService';
import Service from './Service';

/**
 * Contains information about services.
 */
const Services: React.FC<{ services: IService[] }> = ({ services }) => {
    return (
        <div className="services">
            <div className="container">
                {
                    services.map((service, i) =>
                        <Service
                            key={i}
                            animate={service.animate}
                            icon={service.icon}
                            headerText={service.headerText}
                            paragraphText={service.paragraphText}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Services;
