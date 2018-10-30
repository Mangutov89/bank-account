function BankAccount(ownerName, initialDeposit) {
  this.owner = ownerName;
  this.balance = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  return this.balance;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
  return this.balance;
}

$(document).ready(function() {
  
});
