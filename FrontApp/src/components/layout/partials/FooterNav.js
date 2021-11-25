import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#">Se connecter</Link>
        </li>
        <li>
          <Link to="#">Comment ça marche</Link>
        </li>
        <li>
          <Link to="#">Présentation</Link>
        </li>
        <li>
          <Link to="#">Nous contacter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;