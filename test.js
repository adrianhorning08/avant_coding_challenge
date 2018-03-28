const assert = require("assert");
const CreditCard = require("./credit_card.js");

describe("CreditCard", function () {
  let harry,
      sally;

  beforeEach(function () {
    harry = new CreditCard("harry", 1000, 35);
    sally = new CreditCard("sally", 1000, 35);
  });

  describe("#constructor", function () {
    it("should should initialize correctly", function () {
      assert.equal(harry.name, "harry");
      assert.equal(sally.name, "sally");
    });
  });
});
