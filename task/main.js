import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";
import { Data } from "./Data.js";

const cat = new Cat("Garfield", 5, "fish");
const dog = new Dog();

console.log("Name is currently " + cat.getName());

// cat.setName("Garfield");
console.log("Name has been changed to " + cat.getName());

const data = new Data();

data.insert("Cat", cat);


cat.speak('meeeeeeeaeeeeeeaowwww');
console.log(dog.getAge())
dog.speak();
dog.speak();
dog.speak();
dog.speak();
dog.speak();
console.log(dog.getAge())


console.log(cat.getName());
console.log(dog.getName());
console.log(cat.getNames());
console.log(dog.getNames());

cat.setName("Gorfieldddddd");
dog.setName("Borkieeeeee");
console.log(cat.getNames());
console.log(dog.getNames());

console.log(cat.getAverageNameLength());
console.log(dog.getAverageNameLength());







