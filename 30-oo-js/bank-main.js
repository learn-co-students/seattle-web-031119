let form = document.getElementById('transfer-form')
let balance = document.getElementById('balance')
let amount = document.getElementById('transfer-amount')

const ACCOUNT = new BankAccount()
balance.textContent = ACCOUNT.balance

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  
  let amt = parseInt(amount.value)
  ACCOUNT.withdraw(amt)
  balance.textContent = ACCOUNT.balance
})
