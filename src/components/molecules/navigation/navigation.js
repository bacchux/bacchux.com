import React from 'react';
import { Link } from 'gatsby';
import './navigation.scss';

const items = [
  { href: '/notre-offre', label: 'Notre offre' },
  { href: '/pourquoi-bacchux', label: 'Pourquoi choisir BacchUX' },
  { href: '/nous-contacter', label: 'Contactez-nous' },
];

export const Navigation = () => (
  <nav className="navigation">
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.href} activeClassName="is-active">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
