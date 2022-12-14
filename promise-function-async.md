---
description: 'Require any function or method that returns a Promise to be marked async.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/promise-function-async** for documentation.

Ensures that each function is only capable of:

- returning a rejected promise, or
- throwing an Error object.

In contrast, non-`async` `Promise` - returning functions are technically capable of either.
Code that handles the results of those functions will often need to handle both cases, which can get complex.
This rule's practice removes a requirement for creating code to handle both cases.

## Examples

Examples of code for this rule

<!--tabs-->

### ❌ Incorrect

```ts
const arrowFunctionReturnsPromise = () => Promise.resolve('value');

function functionReturnsPromise() {
  return Promise.resolve('value');
}
```

### ✅ Correct

```ts
const arrowFunctionReturnsPromise = async () => Promise.resolve('value');

async function functionReturnsPromise() {
  return Promise.resolve('value');
}
```
