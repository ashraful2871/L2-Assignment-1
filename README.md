## 1. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

- **`any`**:
  any: when is it we use then turn off th type checker , and we can assign anything to assign in variable when we mark `any` type

- **`unknown`**:
  unknown: when you make any variable type `unknown` you can assign anything just like `any`. but when we try to access something from it then typescript will give error as like this 'Stating that whatever you are trying to access for a unknown variable type might not exists.'

- **`never`**:
  `naver` kind of opposite of `any` type. like any say give me anything, and naver say give me nothing.

---

## 2. The `keyof` operator

The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y":

**Example**:

```ts
type Point = { x: number; y: number };
type P = keyof Point;

type P = keyof Point;
```

---
