import { render } from '@testing-library/react';
import PortfolioTitle from '../../components/portfolio/PortfolioTitle';

describe('PortfolioTitle component renders portfolio title', () => {
    test('Header and paragraph texts were rendered correctly', () => {
        const { container, getByRole, getByText } = render(
            <PortfolioTitle
                headerText="Our portfolio"
                paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
        );

        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('section-title');

        const headerText = getByRole('heading');
        expect(headerText).toBeInTheDocument();
        const headerTextFoundByText = getByText('Our portfolio');
        expect(headerTextFoundByText).toBeInTheDocument();

        const paragraphText = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        expect(paragraphText).toBeInTheDocument();
    });
});
