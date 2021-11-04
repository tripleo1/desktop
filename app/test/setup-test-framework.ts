// set test timeout to 10s
jest.setTimeout(10000)

import 'jest-extended'
import 'jest-localstorage-mock'

// by default we set this value in local storage so that the StatsStore doesn't
// call out to the stats endpoint during tests and result in open handles at
// the end of the test run
localStorage.setItem('has-sent-stats-opt-in-ping', 'true')
localStorage.setItem('stats-opt-out', 'true')
