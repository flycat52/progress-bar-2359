import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonControl = (props) => {
  const { value } = props;
  const variant = value > 100 ? 'danger' : 'primary';
  return <Button variant={variant}>{value}</Button>;
};

export default ButtonControl;
