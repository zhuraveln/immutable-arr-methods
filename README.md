# immutable-arr-methods

Convert all mutable array's methods to immutable

Also available custom immutable array's methods for different scenarios [custom-arr-methods](https://www.npmjs.com/package/custom-arr-methods)

## Installation

```bash
npm install immutable-arr-methods
```

## Usage

**All methods have tooltips when you hover over them**
![tooltips-example](https://drive.google.com/uc?id=1L4ocvIR9Yt0uTzNUls7InTCqnmGbPzfZ)

### pop

Return last element from array without mutable source array

```javascript
import { pop } from 'immutable-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = pop(i) // (array)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // 5
```

### push

Return new array with a new elements at end of array without mutable source array

```javascript
import { push } from 'immutable-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = push(i, 42, 42) // (array, itemN)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [1, 2, 3, 4, 5, 42, 42]
```

### shift

Return first element from array without mutable source array

```javascript
import { shift } from 'immutable-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = shift(i) // (array)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // 1
```

### unshift

Return new array with new a elements at start of array without mutable source array

```javascript
import { unshift } from 'immutable-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = unshift(i, 42, 42) // (array, itemN)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [42, 42, 1, 2, 3, 4, 5]
```

### reverse

Return new reversed array without mutable source array

```javascript
import { reverse } from 'immutable-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = reverse(i) // (array)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [5, 4, 3, 2, 1]
```

### sort

Return new sorted array without mutable source array

```javascript
import { sort } from 'immutable-arr-methods'

const i = [7, 1, 33, 444, 42]

const j = sort(i, (a, b) => a - b) // (array, callbackFn)

console.log(i) // [7, 1, 33, 444, 42]
console.log(j) // [1, 7, 33, 42, 444]
```

### splice

Return new spliced array without mutable source array

```javascript
import { splice } from 'immutable-arr-methods'

const i = [7, 1, 33, 444, 42]

const j = splice(i, 1, 2, [42, 42]) // (array, startIndex, deleteCount, elements)

console.log(i) // [7, 1, 33, 444, 42]
console.log(j) // [1, 42, 42, 4, 5]
```
