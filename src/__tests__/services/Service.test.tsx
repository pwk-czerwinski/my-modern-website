import { render } from '@testing-library/react';
import Service from '../../components/services/Service';
import Animate from '../../enums/Animate';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

describe('Service component renders elements like icon, header and paragraph', () => {
    test('Main container - "div" with class "single-col" was rendered correctly', () => {
        const { container, getByRole, getByText } = render(
            <Service
                animate={Animate.FadeInLeft}
                icon={faChartLine}
                headerText="SEO"
                paragraphText="Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut."
            />
        );
        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('single-col');

        const headerText = getByRole('heading');
        expect(headerText).toBeInTheDocument();
        const paragraphText = getByText('Aenean sed justo tincidunt, vulputate nisi si amet, rutrum ligula. Pellentesque dictum uam ornare. Sed elit le rut.');
        expect(paragraphText).toBeInTheDocument();
    });
});
