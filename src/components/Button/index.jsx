import React from 'react';
import classNames from 'classnames';
import './style.scss';

const Button = ({ type, filled, ...rest }) => {
  const props = {
    ...rest,
    className: classNames('button', {
      'button--filled': filled,
    })
  };

  return <button {...props} type={type} />;
};


Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  filled: false,
};

export default Button;
