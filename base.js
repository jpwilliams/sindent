const func = require('./func')

function base (greedy, strings, ...exps) {
  exps.push('')
  const str = exps.reduce((ret, exp, i) => ret + strings[i] + exp, '')

  return func(str, greedy)
}

module.exports = base
