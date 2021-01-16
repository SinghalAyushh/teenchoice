import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';



const FooterNav = ({
  className,
  ...props
}) => {
  const [title, setTitle] = useState("Contact");

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
        <li style={{ cursor: "pointer" }} >{
          title == "Contact" ? <p style={{ color: "#9C69B" }} onClick={() => setTitle("info@3choices.in")}>Contact</p> : <p onClick={() => setTitle("Contact")}>info@3choices.in</p>
        }

        </li>
        <li>
          <Link style={{ color: "white" }} to="#0">About us</Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="#0">FAQ's</Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="#0">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;