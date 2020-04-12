import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { ProgressBar, Dropdown, DropdownButton, Button } from 'react-bootstrap';

const ProgressSelection = () => {
  const buttons = useSelector((state) => state.api.buttons);
  const bars = useSelector((state) => state.api.bars);
  const limit = useSelector((state) => state.api.limit);

  return (
    <div>
      <p>Progress Bars Demo</p>
      {bars &&
        bars.map((b, index) => {
          return <ProgressBar key={index} now={b} label={`${b}`}></ProgressBar>;
        })}
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {bars &&
          bars.map((b, index) => {
            return (
              <Dropdown.Item key={index}>Progress #{index + 1}</Dropdown.Item>
            );
          })}
      </DropdownButton>
      <br />
      <>
        {buttons &&
          buttons.map((button, index) => {
            return (
              <Button variant="primary" key={index}>
                ${button}
              </Button>
            );
          })}
      </>
    </div>
  );
};

export default ProgressSelection;
