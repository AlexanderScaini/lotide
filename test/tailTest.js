const { assert } = require("chai");
const tail = require("../tail");

// const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returned ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
