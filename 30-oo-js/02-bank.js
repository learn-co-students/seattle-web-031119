class BankAccount {
  aa = []

  constructor() {
    this._balance = 1000
    this.bb = []
  }

  // the 'get' keyword allows us to define a function
  // that we can access as if it were a property
  // like: bb.balance << notice there's no parens there
  get balance() {
    console.log('running get balance()')
    return this._balance
  }

  // let's make sure no one can ever set the balance to
  // be less than zero.
  set balance(value) {
    if (value < 0) return
    this._balance = value
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount
      return amount
    }
    return 0
  }

  deposit(amount) {
    if (amount < 0) {
      return 0
    }
    this._balance += amount
  }
}

let account = new BankAccount()
account.withdraw(700)
account.withdraw(450)
console.log(account.balance)

account.balance = -9800
console.log(account.balance)

account._balance = -9800
console.log(account.balance)