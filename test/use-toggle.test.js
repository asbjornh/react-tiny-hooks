import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';

import useToggle from '../source/use-toggle';

const Component = () => {
  const [isActive, toggle] = useToggle();
  return (
    <div>
      <div data-testid="result">{isActive ? 'yep' : 'nope'}</div>
      <div data-testid="toggle" onClick={toggle} />
    </div>
  );
};

test.serial('Toggles', t => {
  const { getByTestId } = rtl.render(<Component />);
  const result = getByTestId('result');
  const click = () => rtl.fireEvent.click(getByTestId('toggle'));

  t.is('nope', result.innerHTML);
  click();
  t.is('yep', result.innerHTML);
  click();
  t.is('nope', result.innerHTML);
  rtl.cleanup();
});
