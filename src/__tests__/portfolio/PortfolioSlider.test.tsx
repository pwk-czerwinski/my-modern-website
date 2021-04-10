import { render} from '@testing-library/react';
import PortfolioSlider from '../../components/portfolio/PortfolioSlider';
import portfolioItems from '../../data/portfolioItems';

describe('PortfolioSlider component renders portfolio slider', () => {
    test('Portfolio slider with items was rendered correctly', () => {
        const { container } = render(
            <PortfolioSlider
                items={portfolioItems}
            />
        );

        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('portfolio-slider');
    })
})
