import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';
import wait from './utils/wait';
import testWithConsoleSpy from './utils/test-with-console-spy';

import useCounter from '../source/use-counter';
import useThrottle from '../source/use-throttle';

const Component = () => {
  const [count, increase] = useCounter();
  const debouncedCount = useThrottle(count, 200);
  return (
    <div>
      <div data-testid="result">{debouncedCount}</div>
      <div data-testid="trigger" onClick={increase} />
    </div>
  );
};

test.serial('Throttles the value', async t => {
  const { getByTestId } = rtl.render(<Component />);
  const result = getByTestId('result');
  const click = () => rtl.fireEvent.click(getByTestId('trigger'));
  t.is('0', result.innerHTML);

  click();
  click();
  click();
  click();
  await wait(100);
  t.is('0', result.innerHTML);

  click();
  await wait(100);
  t.is('5', result.innerHTML);
  rtl.cleanup();
});

testWithConsoleSpy('Performs cleanup', async (t, messages) => {
  const result = rtl.render(<Component />);
  const { getByTestId } = result;
  rtl.fireEvent.click(getByTestId('trigger'));
  result.unmount();
  await wait(300);
  t.deepEqual([], messages.errors);
  rtl.cleanup();
});
