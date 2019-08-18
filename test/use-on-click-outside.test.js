import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';
import wait from './utils/wait';

import useOnClickOutside from '../source/use-on-click-outside';

const Component = () => {
  const [yep, setYep] = React.useState(false);
  const renderCount = React.useRef(0);
  renderCount.current = renderCount.current + 1;
  const ref = useOnClickOutside(() => setYep(true));
  return (
    <div>
      <div ref={ref} data-testid="element">
        <div data-testid="child" />
      </div>
      <div data-testid="outside-element" />
      <div data-testid="result">{yep ? 'yep' : 'nope'}</div>
      <div data-testid="count">{renderCount.current}</div>
    </div>
  );
};

test.serial("Doesn't do anything when clicking `node` or its children", t => {
  const { getByTestId } = rtl.render(<Component />);
  t.is('nope', getByTestId('result').innerHTML);
  rtl.fireEvent.click(getByTestId('element'));
  t.is('nope', getByTestId('result').innerHTML);
  rtl.fireEvent.click(getByTestId('child'));
  t.is('nope', getByTestId('result').innerHTML);
  rtl.cleanup();
});

test.serial('Calls callback when clicking outside', t => {
  const { getByTestId } = rtl.render(<Component />);
  t.is('nope', getByTestId('result').innerHTML);
  rtl.fireEvent.click(getByTestId('outside-element'));
  t.is('yep', getByTestId('result').innerHTML);
  rtl.cleanup();
});

test.serial("Doesn't cause infinite update loops", async t => {
  const { getByTestId } = rtl.render(<Component />);
  await wait(500);
  t.is('2', getByTestId('count').innerHTML);
  rtl.cleanup();
});
