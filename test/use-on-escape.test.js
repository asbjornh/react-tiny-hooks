import React from 'react';
import test from 'ava';
import testWithConsoleErrors from './utils/test-with-console-spy';
import * as rtl from '@testing-library/react';

import useOnEscape from '../source/use-on-escape';

const component = () =>
  React.createElement(() => {
    const [yep, setYep] = React.useState(false);
    useOnEscape(() => setYep(true));
    return yep ? 'yep' : 'nope';
  });

test.serial('Calls event handler on Escape press', t => {
  const { container } = rtl.render(component());
  t.is('nope', container.innerHTML);
  rtl.fireEvent.keyDown(window, { key: 'Escape', keyCode: 27 });
  t.is('yep', container.innerHTML);
  rtl.cleanup();
});

testWithConsoleErrors('Performs cleanup', (t, messages) => {
  const result = rtl.render(component());
  result.unmount();
  rtl.fireEvent.keyDown(window, { key: 'Escape', keyCode: 27 });
  t.deepEqual([], messages.errors);
  rtl.cleanup();
});
