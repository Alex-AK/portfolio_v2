import React from 'react';
import NavLink from './NavLink';

const Navigation = props => {
  return (
    <div>
      {props.navigation.map(link_text => {
        return <NavLink key={link_text} text={link_text} />;
      })}
    </div>
  );
};

export default Navigation;
