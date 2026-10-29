import { Category } from '../../types/Category';

const TITLES: Record<Category, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

interface Props {
  category: Category;
}

export const ProductsPage = ({ category }: Props) => (
  <h1>{TITLES[category]}</h1>
);
