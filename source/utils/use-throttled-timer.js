import React from 'react';

/** Internal hook not meant for public consumption.  */
export default function useTimer(callback, wait = 0) {
  const timerActive = React.useRef(false);
  const timer = React.useRef();

  // NOTE: Callback that starts a timer if a timer isn't already running.
  const pingTimer = React.useCallback(() => {
    if (!timerActive.current) {
      timerActive.current = true;
      timer.current = setTimeout(() => {
        timerActive.current = false;
        callback();
      }, wait);
    }
  }, [callback, wait]);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  return pingTimer;
}
