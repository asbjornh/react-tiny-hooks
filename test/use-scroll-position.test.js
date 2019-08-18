import React from 'react';
import test from 'ava';
import * as rtl from '@testing-library/react';

import useScrollPosition from '../source/use-scroll-position';

const component = () =>
  React.createElement(() => {
    const pos = useScrollPosition();
    return String(pos);
  });

test.serial('Updates scroll position when window is scrolled', async t => {
  const { container } = rtl.render(component());
  t.is('0', container.innerHTML);
  document.documentElement.scrollTop = 100;
  rtl.fireEvent.scroll(window);
  t.is('100', container.innerHTML);
  rtl.cleanup();
});
