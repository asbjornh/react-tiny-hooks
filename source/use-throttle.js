import React from 'react';
import useTimer from './utils/use-throttled-timer';

/** Returns a throttled version of `value`

```js
const [state, setState] = useState();

const throttledState = useThrottle(state, 200);
```
*/
export default function useThrottle(value, wait = 0) {
  const valueRef = React.useRef(value);
  const [throttledValue, setThrottledValue] = React.useState(value);

  const pingTimer = useTimer(
    React.useCallback(() => setThrottledValue(valueRef.current), []),
    wait
  );

  React.useEffect(() => {
    valueRef.current = value;
    pingTimer();
  }, [pingTimer, value]);

  return throttledValue;
}
