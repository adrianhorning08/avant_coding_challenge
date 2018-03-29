module.exports = class CreditCard {
  constructor(name, creditLimit, apr) {
    this.name = name;
    this.creditLimit = creditLimit;
    this.apr = apr / 100;
    this.outstandingBalance = 0;
    this.interestAccumulated = [];
    this.dayOfLastAction = 0;
  }

  calculateBalance(day) {
    if ((day - (day % 10)) % 30 === 0) {
      this.calcAndPushInterest(day);
      this.outstandingBalance += this.interestAccumulated.reduce((a,b) => a + b);
      this.interestAccumulated = [];
    } else {
      this.calcAndPushInterest(day);
      this.dayOfLastAction = day;
    }
  }

  calcAndPushInterest(day) {
    const interest = (this.outstandingBalance * this.apr / 365 * (day - this.dayOfLastAction));
    this.interestAccumulated.push(interest);
  }

  printBalance() {
    return `Your balance is $${this.outstandingBalance.toFixed(2)}`;
  }

  chargeToCard(amount, day) {
    if (this.outstandingBalance + amount > this.creditLimit) {
      throw "Maxed credit limit";
    } else {
      this.calculateBalance(day);
      this.outstandingBalance += amount;
    }
    return this.printBalance();
  }

  payment(amount, day) {
    this.calculateBalance(day);
    this.outstandingBalance -= amount;
    return this.printBalance();
  }

  balance(day) {
    this.calculateBalance(day);
    return this.printBalance();
  }
};
