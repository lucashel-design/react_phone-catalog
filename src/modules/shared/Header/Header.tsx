import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg?react';
import HeartIcon from '../../../assets/icons/heart.svg?react';
import CartIcon from '../../../assets/icons/cart.svg?react';
import MenuIcon from '../../../assets/icons/menu.svg?react';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { to: '/', title: 'Home' },
  { to: '/phones', title: 'Phones' },
  { to: '/tablets', title: 'Tablets' },
  { to: '/accessories', title: 'Accessories' },
];

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.navLink, { [styles.active]: isActive });

const getIconLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.iconLink, { [styles.active]: isActive });

export const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo} aria-label="Nice Gadgets home page">
      <Logo className={styles.logoImage} />
    </Link>

    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {NAV_LINKS.map(({ to, title }) => (
          <li key={to} className={styles.navItem}>
            <NavLink to={to} className={getNavLinkClass}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <div className={styles.actions}>
      <NavLink
        to="/favorites"
        className={getIconLinkClass}
        aria-label="Favourites"
      >
        <HeartIcon />
      </NavLink>

      <NavLink to="/cart" className={getIconLinkClass} aria-label="Cart">
        <CartIcon />
      </NavLink>
    </div>

    <button type="button" className={styles.menuButton} aria-label="Open menu">
      <MenuIcon />
    </button>
  </header>
);
