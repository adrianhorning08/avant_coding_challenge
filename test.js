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
      assert.strictEqual(harry.chargeToCard(500,0), 'Your balance is $500.00');
      assert.strictEqual(sally.chargeToCard(500,0), 'Your balance is $500.00');
    });
  });
});

// sally.chargeToCard(100,25);
