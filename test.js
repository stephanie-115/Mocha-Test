const { describe, it } = require("mocha");
const { expect } = require("chai");
//const assert = require("assert");
const Animal = require("./Animal.js");

console.log(`We tryna test son`);

describe("Animal unit tests", () => {
  let animal;

  beforeEach(() => {
    animal = new Animal("Dubu", "cat", 6);
  });

  it("Should be a cat", () => {
    expect(animal.isCat()).to.be.true;
  });

  it("Should be a dog", () => {
    animal.species = "dog";
    expect(animal.isCat()).to.be.false;
  });

  it("Should only be a dog or a cat", () => {
    animal.species = "human";
    expect(animal.isAllowedSpecies()).to.be.false;
  });
});
