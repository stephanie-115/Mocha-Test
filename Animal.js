function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  Animal.prototype.isCat = function() {
    return this.species === 'cat';
  };  

  Animal.prototype.isAllowedSpecies = function() {
    const allowedSpecies = ['cat', 'dog'];
    return allowedSpecies.includes(this.species);
  }
    
  module.exports = Animal;
  