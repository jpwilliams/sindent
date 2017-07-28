function func (str, greedy) {
  const matchRe = new RegExp(`^[ \\t]${greedy ? '*' : '+'}(?=\\S)`, 'gm')
  const match = str.match(matchRe)

  if (!match) {
    return str
  }

  const indent = Math.min(...match.map(x => x.length))
  const re = new RegExp(`^[ \\t]{${indent}}`, 'gm')

  return indent > 0 ? str.replace(re, '') : str
}

module.exports = func
