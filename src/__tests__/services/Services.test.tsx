import {getByText, render} from '@testing-library/react';
import Services from '../../components/services/Services';
import services from '../../data/services';

describe('Services component renders information about services', () => {
    test('Main container - "div" with class "services" was rendered correctly', () => {
        const { container } = render(
            <Services
                services={services}
            />
        );
        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('services');
    });

    test('All services were rendered correctly', () => {
        const { getByText } = render(
            <Services
                services={services}
            />
        );

        services.map(service => {
            const serviceHeaderText = getByText(service.headerText);
            expect(serviceHeaderText).toBeInTheDocument();

            return service;
        })
    });
});
