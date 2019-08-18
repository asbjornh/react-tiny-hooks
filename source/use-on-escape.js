import useEvent from './use-event';

const isEscape = e => e.key === 'Escape' || e.keyCode === 27;

/** Calls `callback` whenever the Escape key is pressed (on `keydown`).

```js
useOnEscape(() => console.log("Escape was pressed!"));
```
 */
export default function useOnEscape(callback, dependencies = []) {
  useEvent('keydown', e => isEscape(e) && callback(), dependencies);
}
