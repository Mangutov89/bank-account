function BankAccount(ownerName, initialDeposit) {
  this.owner = ownerName;
  this.balance = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  this.balance = parseFloat(this.balance).toFixed(2);
  return this.balance;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
  this.balance = parseFloat(this.balance).toFixed(2);
  return this.balance;
}

function modifyBalance(amount) {
  $("#balance").text(amount);
}

$(document).ready(function() {
  var account = new BankAccount("None", -1);
  $("#newAccount").submit(function(event) {
    event.preventDefault();
    if(account.balance >= 0) {
      $("#existingAccount").show();
      return;
    }
    var ownerName = $("#nameInput").val();
    var balance = parseFloat($("#initialInput").val());
    if(!balance || balance < 0) {
      $("#invalidInitialDeposit").show();
      return;
    }
    balance = parseFloat(balance.toFixed(2));
    account = new BankAccount(ownerName, balance);
    modifyBalance(account.balance);
    $("#invalidInitialDeposit").hide();
    $("#existingAccount").hide();
    $("#nameInput").val('');
    $("#initialInput").val('');
  });
  $("#depositAccount").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseFloat($("#depositInput").val());
    var withdrawalAmount = parseFloat($("#withdrawalInput").val());
    if(!depositAmount && !withdrawalAmount) {
      $("#invalidDepositAmount").show();
      return;
    }
    $("#invalidDepositAmount").hide();
    if(depositAmount) {
      depositAmount = parseFloat(depositAmount.toFixed(2));
      modifyBalance(account.deposit(depositAmount));
    }
    if(withdrawalAmount) {
      withdrawalAmount = parseFloat(withdrawalAmount.toFixed(2));
      if(withdrawalAmount > account.balance) {
        $("#invalidWithdrawalAmount").show();
        return;
      }
      modifyBalance(account.withdraw(withdrawalAmount));
    }
    $("#invalidWithdrawalAmount").hide();
    $("#depositInput").val('');
    $("#withdrawalInput").val('');
  });
});
