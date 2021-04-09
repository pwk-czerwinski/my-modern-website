import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component renders container with navbar which contains logo and menu links', () => {
    test('Main container - "header" was rendered correctly', () => {
        const { getByRole } = render(<Header />);
        const header = getByRole(/banner/i);
        expect(header).toBeInTheDocument();
    });

    test('Container - "nav" was rendered correctly with "div" inside identified by its class which has name "container"', () => {
        const { getByRole } = render(<Header />);
        const nav = getByRole(/navigation/i);
        expect(nav).toBeInTheDocument();
        expect(nav.firstChild).toHaveClass('container');
    });

    test('Logo in navbar was rendered correctly', () => {
        const { getByRole, getByAltText } = render(<Header />);
        const logoFetchedUsingRole = getByRole('img');
        expect(logoFetchedUsingRole).toBeInTheDocument();

        const logoFetchedUsingAltText = getByAltText('logo');
        expect(logoFetchedUsingAltText).toBeInTheDocument();
    });

    test('All menu points in navbar were rendered correctly', () => {
        const { getByRole, getAllByRole, getByText } = render(<Header />);
        const menuList = getByRole('list');
        expect(menuList).toBeInTheDocument();

        const menuListItems = getAllByRole('listitem');
        expect(menuListItems.length).toBe(7);

        const startLink = getByText(/Start/i);
        expect(startLink).toBeInTheDocument();
        const opinionsLink = getByText(/Opinions/i);
        expect(opinionsLink).toBeInTheDocument();
        const portfolioLink = getByText(/Portfolio/i);
        expect(portfolioLink).toBeInTheDocument();
        const shopLink = getByText(/Shop/i);
        expect(shopLink).toBeInTheDocument();
        const cooperationLink = getByText(/Cooperation/i);
        expect(cooperationLink).toBeInTheDocument();
        const contactLink = getByText(/Contact/i);
        expect(contactLink).toBeInTheDocument();
        const allLinks = getAllByRole('link');
        const searchLink = allLinks[allLinks.length-1].firstChild;
        expect(searchLink).toHaveClass('fas fa-search');
    });
});
