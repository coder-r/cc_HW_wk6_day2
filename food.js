// Create a constructor to create Food objects.
//
// Food should have a name
// Food should have a replenishment value

const Food = function (name, rep_value) {
  this.name = name;
  this.rep_value = rep_value;
};

module.exports = Food;
