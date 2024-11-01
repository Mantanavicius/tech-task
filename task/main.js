import { Cat } from "./Cat.js";
import { Data } from "./Data.js";

const cat = new Cat();
console.log("Name is currently " + cat.getName());

cat.setName("Garfield");
console.log("Name has been changed to " + cat.getName());

const data = new Data();

data.insert("Cat", cat);