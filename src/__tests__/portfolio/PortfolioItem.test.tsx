import { render } from '@testing-library/react';
import PortfolioItem from '../../components/portfolio/PortfolioItem';
import owl1Image from '../../images/owl_slider/owl1.jpg';
import { faSearch, faFileImage } from '@fortawesome/free-solid-svg-icons';

describe('PortfolioItem component renders portfolio item', () => {
    test('Image, header, paragraph texts and two icons were rendered correctly', () => {
        const { container, getByRole, getByText, getAllByRole } = render(
            <PortfolioItem
                imageSrc={owl1Image}
                headerText="Example project"
                paragraphText="March 17th 2018"
                icon1={faSearch}
                icon2={faFileImage}
            />
        );

        const mainContainer = container.firstChild;
        expect(mainContainer).toHaveClass('portfolio-item');

        const image = getByRole('img');
        expect(image).toBeInTheDocument();

        const headerText = getByRole('heading');
        expect(headerText).toBeInTheDocument();
        const headerTextFoundByText = getByText('Example project');
        expect(headerTextFoundByText).toBeInTheDocument();

        const paragraphText = getByText('March 17th 2018');
        expect(paragraphText).toBeInTheDocument();

        const links = getAllByRole('link');
        expect(links.length).toBe(2);

        const searchIcon = links[0].firstChild;
        expect(searchIcon).toHaveClass('svg-inline--fa fa-search fa-w-16');

        const fileImageIcon = links[1].firstChild;
        expect(fileImageIcon).toHaveClass('svg-inline--fa fa-file-image fa-w-12');
    });
});
