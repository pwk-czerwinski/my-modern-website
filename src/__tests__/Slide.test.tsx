import { render } from '@testing-library/react';
import Slide from '../components/Slide';
import sliderPhone from './../images/slider-phone.png';

describe('Slide component renders slide which contains header, paragraph, button and image', () => {
    test('Main container - "div" with class "main-slide-1" was rendered correctly', () => {
        const { container, getByRole, getByText } = render(
            <Slide
                headerText="Fully responsive project"
                paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                linkText="Look"
                imageSrc={sliderPhone}
            />
        );
        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('main-slide-1');

        const headerText = getByRole('heading');
        expect(headerText).toBeInTheDocument();
        const paragraphText = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        expect(paragraphText).toBeInTheDocument();
        const link = getByRole('link');
        expect(link).toBeInTheDocument();
        const image = getByRole('img');
        expect(image).toBeInTheDocument();
    });
});
