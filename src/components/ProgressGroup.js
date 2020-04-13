import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ButtonControl from './ButtonControl';
import ProgressControl from './ProgressControl';
import DropdownControl from './DropdownControl';

const ProgressGroup = () => {
  const buttons = useSelector((state) => state.api.buttons);
  const bars = useSelector((state) => state.api.bars);
  const limit = useSelector((state) => state.api.limit);

  return (
    <div>
      <p>Progress Bars Demo</p>
      {bars &&
        bars.map((b, index) => {
          const now = parseInt((b * 100) / limit, 10);
          return <ProgressControl now={now} index={index} key={index} />;
        })}
      {bars && <DropdownControl bars={bars}></DropdownControl>}

      <br />
      <>
        {buttons &&
          buttons.map((buttonValue, index) => {
            return (
              <ButtonControl value={buttonValue} index={index} key={index} />
            );
          })}
      </>
    </div>
  );
};

export default ProgressGroup;
