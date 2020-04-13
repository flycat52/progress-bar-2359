import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressControl = (props) => {
  const { now } = props;
  return <ProgressBar now={now} label={`${now}%`} animated></ProgressBar>;
};

export default ProgressControl;
