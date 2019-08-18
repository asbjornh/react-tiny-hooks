import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';

import useCounter from '../source/use-counter';

const component = () =>
  React.createElement(() => {
    const [count, increase, decrease, setCount] = useCounter(0, 0, 10, 2);
    return (
      <div>
        <div data-testid="count">{count}</div>
        <div data-testid="increase" onClick={increase} />
        <div data-testid="decrease" onClick={decrease} />
        <div data-testid="set" onClick={() => setCount(5)} />
      </div>
    );
  });

test.serial('Counts', async t => {
  const { getByTestId } = rtl.render(component());
  const count = getByTestId('count');
  t.is('0', count.innerHTML);

  // Increases by `step` amount
  rtl.fireEvent.click(getByTestId('increase'));
  t.is('2', count.innerHTML);

  // Respects `min`
  rtl.fireEvent.click(getByTestId('decrease'));
  rtl.fireEvent.click(getByTestId('decrease'));
  t.is('0', count.innerHTML);

  // Can set count
  rtl.fireEvent.click(getByTestId('set'));
  t.is('5', count.innerHTML);

  // Respects `max`
  rtl.fireEvent.click(getByTestId('increase'));
  rtl.fireEvent.click(getByTestId('increase'));
  rtl.fireEvent.click(getByTestId('increase'));
  rtl.fireEvent.click(getByTestId('increase'));
  t.is('10', count.innerHTML);

  rtl.cleanup();
});
