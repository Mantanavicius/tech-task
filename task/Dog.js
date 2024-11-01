const Cat = require("./Cat");

class Dog extends Cat {
  constructor(
    name = "Barkie",
    age = Math.floor(Math.random() * 6) + 5,
    favoriteFood = null
  ) {
    super(name, age, favoriteFood);
  }

  speak(sound = "woof") {
    super.speak(sound);
  }
}

module.exports = Dog;
