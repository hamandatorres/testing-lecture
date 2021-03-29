const functions = require('../functions')

test('function add should add two number', () => {
  expect(functions.add(1, 2)).toBe(3)
} )

test('function add should return a number', () => {
  expect(functions.add(2, 9)).not.toBeNaN()
})

test('reference types are special', () => {
  expect([12]).toEqual([12])
})

test('sayHello returns hello', () => {
  expect(functions.sayHello()).toBe('hello')
})

test('object assignment should add correct properties and values', () => {
  const data = {
    name: 'Andrew',
  }
  data.age = 99;
  data.favorites = {
    food: 'pizza'
  }
  expect(data).toEqual({
    name: 'Andrew',
    age: 99,
    favorites: {
      food: 'pizza'
    }
  })
})

test('user name should contain Leanne', async () => {
  expect.assertions(1);
  const data = await functions.getUser();
  expect(data.name).toEqual('Leanne Graham')

})

let bankAccount = {
  balance: 1000,
  depositMoney(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdrawMoney(amount) {
    this.balance -= amount;
  },
};

describe('Bank account methods and properties', () => {
  beforeEach(() => {
    bankAccount.balance = 1000;
  })

  test('initial balance should be 1000', () => {
    expect(bankAccount.balance).toBe(1000);
  })
  test('depositing 9000 should update balance to 10000', () => {
    expect(bankAccount.depositMoney(9000)).toBe(10000);
  })
})