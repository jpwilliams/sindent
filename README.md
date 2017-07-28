# sindent
Remove indentation from string literals in a predictable manner using template tags.

``` js
const sindent = require('sindent')

sindent`This string
  should only indent
    right here
  but nowhere else,
  as it's obvious we don't want
  the other indentations`

// This string
// should only indent
//   right here
// but nowhere else
// as it's obvious we don't want
// the other indentations
```

## Greedy mode

This "mode" makes the internal regex nice and hungry, so it'll accept an indentation of 0 as the smallest it finds.
This isn't _usually_ what you want, but it fits certain cases.

``` js
const sindent = require('sindent/greedy')

sindent`This line will be matched as the smallest,
  so this line will be indented`

// This line will be matched as the smallest
//   so this line will be indented
```

## Function mode

If you don't want to use template tags, you can also use _sindent_ as a normal function, accepting `str` and `greedy`.

``` js
const sindent = require('sindent/func')

sindent(`Let's start
  a greedy,
    greedy
indent`, true)

// Let's start
//   a greedy
//     greedy
// indent
```
