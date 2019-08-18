const avaTest = require('ninos')(require('ava'));

const concatCallArgs = calls =>
  calls.reduce((a, call) => a.concat(call.arguments), []);

export default function testWithConsoleSpy(title, test) {
  avaTest.serial(title, async t => {
    const error = t.context.spy(console, 'error');
    const warn = t.context.spy(console, 'warn');
    const log = t.context.spy(console, 'log');

    const consoleRef = {
      get errors() {
        return concatCallArgs(error.calls);
      },
      get warnings() {
        return concatCallArgs(warn.calls);
      },
      get logs() {
        return concatCallArgs(log.calls);
      }
    };

    await test(t, consoleRef);
  });
}
