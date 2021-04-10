import { render} from '@testing-library/react';
import Portfolio from '../../components/portfolio/Portfolio';
import portfolioTitle from '../../data/portfolioTitle';
import portfolioItems from '../../data/portfolioItems';

describe('Portfolio component renders portfolio title and portfolio items presented in slider', () => {
    test('Portfolio title and items were rendered correctly', () => {
        const { container } = render(
            <Portfolio
                title={portfolioTitle}
                items={portfolioItems}
            />
        );

        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('portfolio');
    })
})
