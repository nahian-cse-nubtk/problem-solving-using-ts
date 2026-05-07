# Why `any` is Called a “Type Safety Hole” and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript helps us write safer JavaScript code by checking types before the code runs. This reduces bugs and makes applications more reliable. Among the many types in TypeScript, two special types are `any` and `unknown`.

At first, both may seem similar because they can store any kind of value. However, they behave very differently when it comes to safety.

The `any` type removes TypeScript’s protection completely, for this developers often call it a **“type safety hole.”** In contrast, `unknown` helps to handle uncertain or unpredictable data in a much safer way.

To understand why `unknown` is safer, it is also important to understand a concept called **type narrowing**, which allows TypeScript to safely identify the actual type of a value before using it.

---

# Why `any` is Called a “Type Safety Hole”

When a variable is assigned the type `any`, TypeScript stops checking that variable completely. This means you can perform any operation on it, even if the operation is incorrect.

## Example Using `any`

```ts
let data: any = "Hello";

console.log(data.toUpperCase());

data = 50;

console.log(data.toUpperCase());
```

In this example:

- At first, `data` contains a string, so `toUpperCase()` works correctly.
- Later, `data` becomes a number.
- Numbers do not have a `toUpperCase()` method.

Even though this code is wrong, TypeScript shows no error because the variable is typed as `any`.

The error will only appear during runtime.

This is dangerous because TypeScript’s main purpose is to catch errors before the code runs. Since `any` bypasses all type checking, it creates a “hole” in the safety system. That is why developers call it a:

> **Type Safety Hole**

---

# Why `unknown` is Safer

The `unknown` type is also used when the actual type of data is not known beforehand. However, unlike `any`, TypeScript does not allow direct operations on an `unknown` value unless its type is verified first.

## Example Using `unknown`

```ts
let data: unknown = "Hello";

console.log(data.toUpperCase());
```

This code produces a TypeScript error because TypeScript does not yet know whether `data` is truly a string.

---

# Understanding Type Narrowing

## What is Type Narrowing?

Type narrowing is the process of checking a value’s type and reducing it from a general type to a more specific type.

In simple words:

> TypeScript first treats the value as uncertain, then “narrows” it down after a type check.

---

# Type Narrowing with `typeof`

```ts
let data: unknown = "TypeScript";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

# Another Example

```ts
function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log("This is not a string");
  }
}

printLength("Hello");
printLength(100);
```

---

# Difference Between `any` and `unknown`

| `any` | `unknown` |
|---|---|
| Disables type checking | Keeps type checking active |
| Unsafe | Safer |
| Runtime errors likely | Prevents many errors |

---

# Conclusion

The `any` type is called a **type safety hole** because it disables TypeScript’s type checking completely.

The `unknown` type is safer because it forces developers to verify the type before using a value.

This verification process is called **type narrowing**, which improves safety and reliability in TypeScript code.
