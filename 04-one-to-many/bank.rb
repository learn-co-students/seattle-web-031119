require 'pry'

class BankAccount
  attr_accessor(:owner_name)
  attr_reader :balance

  @@all = []

  def initialize(owner_name, balance)
    @owner_name = owner_name
    @balance = balance
    @@all << self
  end

  def transfer_account(new_owner)
    # ruby things we are creating a new local variable, doesn't work
    # owner_name = new_owner
    #
    # it now knows we are calling the writer method
    # owner_name= new_owner
    #
    # also knows we are calling writer method
    # self.owner_name = new_owner
  end

  def self.all
    @@all
  end

  def self.whale
    self.all.max_by{|account| account.balance}
  end

  def self.overdraw
    self.all.select{|account| account.balance < 300}
  end

  def deposit(deposit_amount)
    puts self
    @balance += deposit_amount
  end

  def withdraw(withdraw_amount)
    @balance -= withdraw_amount
  end

  def self.clear
    @@all.clear
  end

  def pretty_balance
    puts "You have $#{balance} in the bank"
  end
end

accounts = [
  {owner_name: 'niky', balance: 500},
  {owner_name: "soundarya", balance: 50},
  {owner_name: "chris", balance: -200}
].map do |hash|
  BankAccount.new(hash[:owner_name], hash[:balance])
end
niky = accounts[0]


Pry.start
