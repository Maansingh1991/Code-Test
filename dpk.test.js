const { deterministicPartitionKey } = require("./dpk");
let partitionKey = 0;
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns random key when blank object is passed no partition key passed", () => {
    const trivialKey = deterministicPartitionKey({});

    expect(trivialKey).not.toEqual("0");
  });

  it("Returns partition key when partition key object passed", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 2 });

    expect(trivialKey).toEqual("2");
  });

  it("Return random key when partition key is greater than 256 characters", () => {
    partitionKey = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
    const trivialKey = deterministicPartitionKey({ partitionKey: partitionKey });

    expect(trivialKey).not.toEqual(partitionKey);
  });

  it("Return key when partition key is less than 256 characters", () => {
    partitionKey = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
    const trivialKey = deterministicPartitionKey({ partitionKey: partitionKey });

    expect(trivialKey).toBe(partitionKey);
  });
  it("Return random key when partition key is null", () => {
    partitionKey = null;
    const trivialKey = deterministicPartitionKey({ partitionKey: partitionKey });

    expect(trivialKey).not.toEqual(partitionKey);
  });
});
