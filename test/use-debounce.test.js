import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';
import wait from './utils/wait';
import testWithConsoleSpy from './utils/test-with-console-spy';

import useCounter from '../source/use-counter';
import useDebounce from '../source/use-debounce';

const Component = () => {
  const [count, increase] = useCounter();
  const debouncedCount = useDebounce(count, 200);
  return (
    <div>
      <div data-testid="result">{debouncedCount}</div>
      <div data-testid="trigger" onClick={increase} />
    </div>
  );
};

test.serial('Debounces the value', async t => {
  const { getByTestId } = rtl.render(<Component />);
  const result = getByTestId('result');
  const click = () => rtl.fireEvent.click(getByTestId('trigger'));
  t.is('0', result.innerHTML);

  click();
  await wait(150);
  t.is('0', result.innerHTML);

  click();
  await wait(150);
  t.is('0', result.innerHTML);

  click();
  await wait(150);
  t.is('0', result.innerHTML);

  await wait(50);
  t.is('3', result.innerHTML);

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
