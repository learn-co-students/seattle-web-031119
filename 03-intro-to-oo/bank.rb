require 'pry'

account_hashes = [
  {owner_name: 'niky', balance: 500},
  {:owner_name=>"soundarya", :balance=>50},
  {:owner_name=>"chris", :balance=>-200}
]

class BankAccount
  # attr_accessor(:balance)
  attr_reader :balance

  def initialize(owner_name, balance)
    @owner_name = owner_name
    @balance = balance
  end

  def deposit(deposit_amount)
    @balance += deposit_amount
  end

  def withdraw(withdraw_amount)
    @balance -= withdraw_amount
  end

  # #reader or getter
  # def balance
  #   @balance + 50
  # end
  #
  # #writer or setter
  # def balance=(balance)
  #   @balance = balance
  # end

  def pretty_balance
    puts "You have $#{balance} in the bank"
  end



end

accounts = account_hashes.map do |hash|
  BankAccount.new(hash[:owner_name], hash[:balance])
end

soundarya = accounts[1]
soundarya.balance=(500)

Pry.start
