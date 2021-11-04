import Dexie from 'dexie'
Dexie.dependencies.indexedDB = require('fake-indexeddb')
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange')

// shims a bunch of browser specific methods
// like fetch, requestIdleCallback, etc
import 'airbnb-browser-shims/browser-only'

// These constants are defined by Webpack at build time, but since tests aren't
// built with Webpack we need to make sure these exist at runtime.
const g: any = global
g['__WIN32__'] = process.platform === 'win32'
g['__DARWIN__'] = process.platform === 'darwin'
g['__LINUX__'] = process.platform === 'linux'
g['__DEV__'] = 'false'
g['__RELEASE_CHANNEL__'] = 'development'
g['__UPDATES_URL__'] = ''
g['__SHA__'] = 'test'

g['log'] = {
  error: () => {},
  warn: () => {},
  info: () => {},
  debug: () => {},
} as IDesktopLogger

// setImmediate is a Node-only API, and tests which rely on the DOM or access
// `window.*` cannot be run under the Jest node test environment, so this will
// polyfill the global for those tests because they need both pieces from
// both environments (because Electron renderer processes!)
//
// see https://github.com/facebook/jest/pull/11222 for the PR where this was
// removed from the Jest jsdom test environment
if (!g.setImmediate) {
  g.setImmediate = require('set-immediate-shim')
}
