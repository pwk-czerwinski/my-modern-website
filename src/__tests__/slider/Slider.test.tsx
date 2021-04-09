import { render } from '@testing-library/react';
import Slider from '../../components/slider/Slider';
import slides from '../../data/slides';

describe('Slider component renders slider which shows different images', () => {
    test('Main container - "div" with class "top-slider" was rendered correctly', () => {
        const { container } = render(
            <Slider
                slides={slides}
            />
        );
        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('top-slider');
    });

    test('List of slides was rendered correctly', () => {
        const { getByRole } = render(
            <Slider
                slides={slides}
            />
        );
        const listOfSlides = getByRole('list');
        expect(listOfSlides).toBeInTheDocument();
    });
});
