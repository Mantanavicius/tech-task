class Cat {
  constructor(
    name = "Floofy",
    age = Math.floor(Math.random() * 6) + 5,
    favoriteFood = null
  ) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
    this.givenNames = [name];
    this.speakCount = 0;
  }

  getName() {
    return this.name;
  }

  getNames() {
    return this.givenNames;
  }

  getAge() {
    return this.age;
  }

  getFavoriteFood() {
    return this.favoriteFood;
  }

  setName(newName) {
    this.name = newName;
    this.givenNames.push(newName);
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setFavoriteFood(newFavoriteFood) {
    this.favoriteFood = newFavoriteFood;
  }

  speak(sound = "meow") {
    this.speakCount++;
    console.log(sound);
    if (this.speakCount % 5 === 0) {
      this.age++;
    }
  }

  getAverageNameLength() {
    return (
      this.givenNames.reduce((a, b) => a + b.length, 0) / this.givenNames.length
    );
  }
}

module.exports = Cat;
