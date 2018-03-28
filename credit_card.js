class CreditCard {
  constructor(name, creditLimit, apr) {
    this.name = name;
    this.creditLimit = creditLimit;
    this.apr = apr / 100;
    this.balance = 0;
    this.interestAccumulated = [];
    this.dayOfLastAction = 0;
  }

  calculateBalance(day) {
    if ((day - (day % 10)) % 30 === 0) {
      this.calcAndPushInterest(day);
      this.balance += this.interestAccumulated.reduce((a,b) => a + b);
      this.interestAccumulated = [];
    } else {
      this.calcAndPushInterest(day);
      this.dayOfLastAction = day;
    }
  }

  calcAndPushInterest(day) {
    const interest = (this.balance * this.apr / 365 * (day - this.dayOfLastAction));
    this.interestAccumulated.push(interest);
  }

  printBalance() {
    return `Your balance is $${this.balance.toFixed(2)}`;
  }

  chargeToCard(amount, day) {
    if (this.balance + amount > this.creditLimit) {
      throw "Maxed credit limit";
    } else {
      this.calculateBalance(day);
      this.balance += amount;
    }
    return this.printBalance();
  }

  payment(amount, day) {
    this.calculateBalance(day);
    this.balance -= amount;
    return this.printBalance();
  }

  outstandingBalance(day) {
    this.calculateBalance(day);
    return this.printBalance();
  }
}

const sally = new CreditCard('sally', 1000, 35);
sally.chargeToCard(500,0)
sally.payment(200,15)
sally.chargeToCard(100,25)
sally.outstandingBalance(30);
sally.outstandingBalance(45);
console.log(sally.outstandingBalance(60));
