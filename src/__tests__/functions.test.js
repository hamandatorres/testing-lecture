const { sum, sayHello } = require('../functions')

test('Add 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).not.toBeNaN()
})

test('Says hello', () => {
  expect(sayHello()).toBe('hello')
})

test('object assignment', () => {
  const data = { name: 'Andrew' }
  data.age = 27
  data.favorites = { food: 'pizza' }
  expect(data).toEqual({
    name: 'Andrew',
    age: 27,
    favorites: { food: 'pizza' },
  })
})

test('True will be truthy', () => {
  expect(true).toBeTruthy()
})

const names = ['Andrew', 'Brandon', 'Becca']

test('Names contains Becca', () => {
  expect(names).toContain('Becca')
  expect(names).not.toContain('Preston')
})

let bankAccount = {
  balance: 1000,
  depositMoney(amount) {
    this.balance += amount
  },
  withdrawMoney(amount) {
    this.balance -= amount
  },
}

describe('Bank account methods and properties', () => {
  beforeEach(() => {
    bankAccount.balance = 1000
  })

  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })

  test('depositMoney should correctly alter balance', () => {
    bankAccount.depositMoney(2000)
    expect(bankAccount.balance).toBe(3000)
  })

  test('withdrawMoney should correctly alter balance', () => {
    bankAccount.withdrawMoney(2000)
    expect(bankAccount.balance).toBe(-1000)
  })
})
