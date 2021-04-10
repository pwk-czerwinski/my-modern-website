import IPortfolioTitle from './IPortfolioTitle';
import IPortfolioItem from './IPortfolioItem';

/**
 * Portfolio data.
 */
interface IPortfolio {
    title: IPortfolioTitle;
    items: IPortfolioItem[]
}

export default IPortfolio;
