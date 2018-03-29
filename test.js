const assert = require("assert");
const CreditCard = require("./credit_card.js");

describe("CreditCard", function () {
  let harry;
  let sally;
  beforeEach(function () {
    harry = new CreditCard('harry', 1000, 35);
    sally = new CreditCard('sally', 1000, 35);
  });

  describe("#constructor", function () {
    it("should initialize correctly", function () {
      assert.equal(harry.name, "harry");
      assert.equal(harry.apr, 0.35);
      assert.equal(sally.name, "sally");
      assert.equal(sally.apr, 0.35);
    });
  });
  describe("#payment", function () {
    it("should decrease outstanding balance", function () {
      sally.chargeToCard(500,0);
      assert.equal(sally.payment(200,15), 'Your balance is $300.00');
    });
  });
  describe("#chargeToCard", function () {
    it("should increase outstanding balance owed when card is charged", function () {
      assert.equal(harry.chargeToCard(500,0), 'Your balance is $500.00');
      assert.equal(sally.chargeToCard(500,0), 'Your balance is $500.00');
    });
  });
  describe("#outstandingBalance", function () {
    it("should output correct outstanding balance for Avant test scenario 1", function () {
      harry.chargeToCard(500,0);
      assert.equal(harry.balance(30), 'Your balance is $514.38');
    });
    it("should output correct outstanding balance for Avant test scenario 2", function () {
      sally.chargeToCard(500,0);
      sally.payment(200,15);
      sally.chargeToCard(100,25);
      assert.equal(sally.balance(30), 'Your balance is $411.99');
    });
    it("should work past 30 days", function () {
      sally.chargeToCard(500,0);
      sally.payment(200,15);
      sally.chargeToCard(100,25);
      assert.equal(sally.balance(60), 'Your balance is $423.49');
    });
  });

});
