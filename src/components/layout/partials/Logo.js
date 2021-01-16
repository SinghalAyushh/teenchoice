import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
      style={{
        position: "relative",
        top: "20px"
      }}
    >
      <h1 className="m-0">
        <Link to="/main">
          <Image
            src={require('./../../../assets/images/re.png')}
            alt="Open"
            width={32}
            height={32} />
        </Link>
        <b><h2 style={{
          margin: "2px", position: "relative",
          top: "-39px",
          left: "33px"
        }}><Link to="/" >3choices</Link></h2></b>
      </h1 >
    </div >
  );
}

export default Logo;