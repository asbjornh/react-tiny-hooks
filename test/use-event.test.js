import React from 'react';
import test from 'ava';
import testWithConsoleSpy from './utils/test-with-console-spy';
import * as rtl from '@testing-library/react';

import useEvent from '../source/use-event';

const Component = () => {
  const [yep, setYep] = React.useState(false);
  useEvent('touchstart', () => setYep(true));
  return yep ? 'yep' : 'nope';
};

test.serial('Calls event handler when event occurs', t => {
  const { container } = rtl.render(<Component />);
  t.is('nope', container.innerHTML);
  rtl.fireEvent.touchStart(window);
  t.is('yep', container.innerHTML);
  rtl.cleanup();
});

testWithConsoleSpy('Performs cleanup', (t, messages) => {
  const result = rtl.render(<Component />);
  result.unmount();
  rtl.fireEvent.touchStart(window);
  t.deepEqual([], messages.errors);
  rtl.cleanup();
});
