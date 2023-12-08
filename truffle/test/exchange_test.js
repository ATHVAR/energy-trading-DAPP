

const Exchange = artifacts.require("Exchange");

contract("Exchange", (accounts) => {
  let exchange;

//   beforeEach(async () => {
//     exchange = await Exchange.new();
//   });

  // Test case for the placeAsk function
  it("should place an ask", async () => {
    exchange = await Exchange.new();
    const price = 100; // Set the price of the ask to 100
    const amount = 10; // Set the amount of the ask to 10
    const timestamp = Date.now(); // Set the timestamp of the ask to the current time
    const result = await exchange.placeAsk(price, amount, timestamp, {
      from: accounts[0],
    }); // Place the ask on the Exchange smart contract
    assert.strictEqual(result.receipt.status, true); // Check if the ask was placed successfully
    assert.strictEqual(result.logs.length, 1); // Check if the AskPlaced event was emitted exactly once
    assert.strictEqual(result.logs[0].event, "AskPlaced"); // Check if the event emitted was AskPlaced
    assert.strictEqual(result.logs[0].args.owner, accounts[0]); // Check if the owner of the ask is the same as the account that placed the ask
    assert.strictEqual(result.logs[0].args.price.toNumber(), price); // Check if the price of the ask is equal to the specified price
    assert.strictEqual(result.logs[0].args.amount.toNumber(), amount); // Check if the amount of the ask is equal to the specified amount
    assert.strictEqual(result.logs[0].args.date.toNumber(), timestamp); // Check if the timestamp of the ask is equal to the specified timestamp
  });

  // Test case for the removeBid function
  it("should remove a bid", async () => {
    exchange = await Exchange.new();
    const price = 100; // Set the price of the bid to 100
    const amount = 10; // Set the amount of the bid to 10
    const timestamp = Date.now(); // Set the timestamp of the bid to the current time
    await exchange.placeBid(price, amount, timestamp, { from: accounts[0] }); // Place the bid on the Exchange smart contract
    const result = await exchange.removeBid(0); // Remove the first bid from the Bids array
    assert.strictEqual(result.logs.length, 1); // Check if the BidRemoved event was emitted exactly once
    assert.strictEqual(result.logs[0].event, "BidRemoved"); // Check if the event emitted was BidRemoved
    assert.strictEqual(result.logs[0].args.owner, accounts[0]); // Check if the owner of the bid is the same as the account that placed the bid
    assert.strictEqual(result.logs[0].args.price.toNumber(), price); // Check if the price of the bid is equal to the specified price
    assert.strictEqual(result.logs[0].args.amount.toNumber(), amount); // Check if the amount of the bid is equal to the specified amount
    assert.strictEqual(result.logs[0].args.date.toNumber(), timestamp); // Check if the timestamp of the bid is equal to the specified timestamp
  });

  // Test case for the removeAsk function
  it("should remove an ask", async () => {
    exchange = await Exchange.new();
    const price = 100; // Set the price of the ask to 100
    const amount = 10; // Set the amount of the ask to 10
    const timestamp = Date.now(); // Set the timestamp of the ask to the current time
    await exchange.placeAsk(price, amount, timestamp, { from: accounts[0] }); // Place the ask on the Exchange smart contract
    const result = await exchange.removeAsk(0); // Remove the first ask from the Asks array
    assert.strictEqual(result.logs.length, 1); // Check if the AskRemoved event was emitted exactly once
    assert.strictEqual(result.logs[0].event, "AskRemoved"); // Check if the event emitted was AskRemoved
    assert.strictEqual(result.logs[0].args.owner, accounts[0]); // Check if the owner of the ask is the same as the account that placed the ask
    assert.strictEqual(result.logs[0].args.price.toNumber(), price); // Check if the price of the ask is equal to the specified price
    assert.strictEqual(result.logs[0].args.amount.toNumber(), amount); // Check if the amount of the ask is equal to the specified amount
    assert.strictEqual(result.logs[0].args.date.toNumber(), timestamp); // Check if the timestamp of the ask is equal to the specified timestamp
  });
});