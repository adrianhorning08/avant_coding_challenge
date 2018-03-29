const assert = require("assert");
const CreditCard = require("./credit_card.js");

describe("CreditCard", function () {
  const harry = new CreditCard('harry', 1000, 35);
  const sally = new CreditCard('sally', 1000, 35);

  describe("#constructor", function () {
    it("should should initialize correctly", function () {
      assert.equal(harry.name, "harry");
      assert.equal(sally.name, "sally");
    });
  });
});


// const sally = new CreditCard('sally', 1000, 35);
// sally.chargeToCard(500,0)
// sally.payment(200,15)
// sally.chargeToCard(100,25)
// sally.outstandingBalance(30);
// sally.outstandingBalance(45);
// console.log(sally.outstandingBalance(60));
