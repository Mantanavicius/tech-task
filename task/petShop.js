import { Cat } from "./Cat.js";
import { Dog } from "./Dog.js";
import { Data } from "./Data.js";

const saveTest = () => {
  const data = new Data("petShop");

  data.beginTran();

  const cat = new Cat("Purrington");
  const dog = new Dog("Barkington");

  data.insert("Cats", cat);
  data.insert("Dogs", dog);

  try {
    data.commit();
  } catch (error) {
    data.rollback();
    console.log(error);
  }
};

const savePetShop = () => {
  const data = new Data("petShop");

  data.beginTran();

  const pets = [
    new Cat(),
    new Cat(),
    new Cat(),
    new Dog(),
    new Dog(),
    new Dog(),
  ];

  try {
    pets.forEach((pet) => data.insert("Pets", pet));
    data.commit();
  } catch (error) {
    data.rollback();
    console.log(error);
  }
};

const logStats = (data) => {
  console.log(
    `We have ${data.pets} pets: ${data.cats} cats, and ${data.dogs} dogs.`
  );
};

saveTest();
savePetShop();
logStats({
  pets: 6,
  cats: 3,
  dogs: 3,
});
