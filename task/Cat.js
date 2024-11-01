export class Cat {
  constructor(name = null ?? '', age = null, favoriteFood = null) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getFavoriteFood() {
    return this.favoriteFood;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setFavoriteFood(newFavoriteFood) {
    this.favoriteFood = newFavoriteFood;
  }
}
