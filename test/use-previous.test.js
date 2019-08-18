import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';

import useCounter from '../source/use-counter';
import usePrevious from '../source/use-previous';

const component = () =>
  React.createElement(() => {
    const [count, increase] = useCounter();
    const previousCount = usePrevious(count, 'initial');
    return (
      <div>
        <div data-testid="count">{count}</div>
        <div data-testid="previous">{previousCount}</div>
        <div data-testid="increase" onClick={increase} />
      </div>
    );
  });

test.serial('Returns previous value', async t => {
  const { getByTestId } = rtl.render(component());
  const count = getByTestId('count');
  const prev = getByTestId('previous');
  const click = () => rtl.fireEvent.click(getByTestId('increase'));
  t.is('0', count.innerHTML);
  t.is('initial', prev.innerHTML);

  click();
  t.is('1', count.innerHTML);
  t.is('0', prev.innerHTML);

  click();
  t.is('2', count.innerHTML);
  t.is('1', prev.innerHTML);

  click();
  t.is('3', count.innerHTML);
  t.is('2', prev.innerHTML);

  rtl.cleanup();
});
