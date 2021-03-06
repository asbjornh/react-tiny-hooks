# react-tiny-hooks

A small but growing collection of simple hooks for React.js that you could easily type out yourself but you're too lazy 🐌.

All the hooks are exposed as separate files, like so:

```js
import useEvent from "react-tiny-hooks/use-event";
```

## Contributing

New hooks or ideas for new hooks are very welcome, as long as they are simple and dependency free!

## Hooks


- [use-counter](#use-counter)
- [use-debounce](#use-debounce)
- [use-event](#use-event)
- [use-is-mounted](#use-is-mounted)
- [use-on-click-outside](#use-on-click-outside)
- [use-on-escape](#use-on-escape)
- [use-previous](#use-previous)
- [use-scroll-position](#use-scroll-position)
- [use-throttle](#use-throttle)
- [use-toggle](#use-toggle)

<a id="use-counter"></a>
### useCounter(_initialValue = 0, min = 0, max = Infinity, step = 1_)

**Import:** _react-tiny-hooks/use-counter_

This hook counts things. Useful for things like slideshows/carousels.

```js
const [count, increase, decrease, setCount] = useCounter(0, 0, 10, 1);

// Or a slideshow version:
const [current, next, previous, goTo] = useCounter(0, 0, slides.length);
```
 

<a id="use-debounce"></a>
### useDebounce(_value, wait = 0_)

**Import:** _react-tiny-hooks/use-debounce_

Returns a debounced version of `value`. Useful for stuff like autosuggest.

```js
const [state, setState] = useState();

const debouncedState = useDebounce(state, 200);
```


<a id="use-event"></a>
### useEvent(_eventName, eventHandler, dependencies = []_)

**Import:** _react-tiny-hooks/use-event_

Attach an event listener to `window`.

```js
const [width, setWidth] = useState(0);
useEvent("resize", () => setWidth(window.innerWidth));
```

```js
// With dependency
const onKeyDown = useCallback(e => setSomething(e));
useEvent("keydown", onKeydown, [onKeyDown]);
```


<a id="use-is-mounted"></a>
### useIsMounted()

**Import:** _react-tiny-hooks/use-is-mounted_

Returns a boolean indicating whether the component is currently mounted. Useful for server side rendering.

```js
const isMounted = useIsMounted();
```


<a id="use-on-click-outside"></a>
### useOnClickOutside(_callback, dependencies = []_)

**Import:** _react-tiny-hooks/use-on-click-outside_

Returns a ref to be attached to a React element. Whenever a click event occurs outside of that ref, `callback` is called.

```jsx
const ref = useOnClickOutside(() => console.log("yay"));

return <div ref={ref} />;
```


<a id="use-on-escape"></a>
### useOnEscape(_callback, dependencies = []_)

**Import:** _react-tiny-hooks/use-on-escape_

Calls `callback` whenever the Escape key is pressed (on `keydown`).

```js
useOnEscape(() => console.log("Escape was pressed!"));
```
 

<a id="use-previous"></a>
### usePrevious(_value, initialValue_)

**Import:** _react-tiny-hooks/use-previous_

Returns the value of `value` from the previous render.

```js
const [value, setValue] = useState();
const previousValue = usePrevious(value);
```
 

<a id="use-scroll-position"></a>
### useScrollPosition()

**Import:** _react-tiny-hooks/use-scroll-position_

Returns the current scroll position.

```js
const scrollPosition = useScrollPosition();
```
 

<a id="use-throttle"></a>
### useThrottle(_value, wait = 0_)

**Import:** _react-tiny-hooks/use-throttle_

Returns a throttled version of `value`

```js
const [state, setState] = useState();

const throttledState = useThrottle(state, 200);
```


<a id="use-toggle"></a>
### useToggle(_initialValue = false_)

**Import:** _react-tiny-hooks/use-toggle_

Returns a boolean flag (`value`) and functions for updating it.

```js
const [value, toggle, activate, deactivate] = useToggle();
```
