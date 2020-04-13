import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const DropdownControl = (props) => {
  const bars = props.bars;
  const [title, setTitle] = useState('Progress');

  const onDropdownItemSelect = (eventKey, event) => {
    setTitle(event.target.textContent);
  };

  return (
    <DropdownButton title={title}>
      {bars &&
        bars.map((b, index) => {
          return (
            <Dropdown.Item key={index} onSelect={onDropdownItemSelect}>
              Progress #{index + 1}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};
export default DropdownControl;
