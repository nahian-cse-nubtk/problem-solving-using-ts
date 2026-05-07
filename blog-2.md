# How the Four Pillars of OOP Reduce Complexity in Large TypeScript Projects

## Introduction

As TypeScript applications grow, managing logic becomes harder. We deal with many features, shared data, repeated code, and changing requirements. Without a proper structure, the code quickly becomes messy and difficult to maintain.

Object-Oriented Programming (OOP) solves this problem using four main principles: **Encapsulation, Abstraction, Inheritance, and Polymorphism**. Together, these pillars help organize code into smaller, reusable, and easier-to-manage parts.

---

# 1. Encapsulation – Protecting and Organizing Data

Encapsulation means keeping data and methods inside a class and controlling how they are accessed.

## Example

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(500);

console.log(account.getBalance());
```

Encapsulation prevents direct access to internal data and reduces bugs.

---

# 2. Abstraction – Hiding Unnecessary Details

Abstraction shows only essential features while hiding internal logic.

## Example

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const payment: Payment = new CreditCardPayment();
payment.pay(1000);
```

It simplifies usage by hiding complex implementation details.

---

# 3. Inheritance – Reusing Code Efficiently

Inheritance allows one class to reuse another class’s logic.

## Example

```ts
class User {
  constructor(public name: string) {}

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser(user: string) {
    console.log(`Admin deleted ${user}`);
  }
}

const admin = new Admin("Nahian");

admin.login();
admin.deleteUser("John");
```

It reduces duplication and improves maintainability.

---

# 4. Polymorphism – One Interface, Many Forms

Polymorphism allows different classes to share the same method with different behavior.

## Example

```ts
class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

function playSound(animal: Animal) {
  animal.makeSound();
}

playSound(new Dog());
playSound(new Cat());
```

It removes the need for complex conditional logic.

---

# How All Four Work Together

- Encapsulation → It is used to protect data.
- Abstraction → It simplifies complexity.
- Inheritance → It is used to reuse code.
- Polymorphism → It increases flexibility.

Together, they make large TypeScript projects easier to manage and scale.

---

# Conclusion

OOP pillars are essential for building scalable TypeScript applications. They reduce complexity, improve readability, and make code easier to maintain as the project grows.
