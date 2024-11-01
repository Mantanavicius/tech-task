# Front-End Developer | Homework Assignment

This repository contains a homework assignment for a front-end developer role.

## Prerequisites

### Make sure you have Node.js installed

[Node.js](https://nodejs.org/) is required for running and installing (since it comes with Node Package Manager) individual files, used in this project. You can check if Node.js is installed by running:

```bash
node -v
```

If this command returns a version number (e.g., v20.14.0), you have Node.js installed. If not, you can just follow the instructions on the Node.js website to install it.

## How to install:

### 1. Clone this repository to your local machine:

```bash
git clone https://github.com/Mantanavicius/tech-task.git
cd tech-task
```

### 2. Install the dependencies by using:

```bash
npm install
```

## Running tests

This project uses Jest for unit testing. To run the tests, make sure you installed the dependencies and use the following command:

```
npm test
```

## Running individual files

You can run individual files by using the command:

```bash
node [file-you-want-to-run]

(e.g.): node main.js
```

## Project structure

#### The project structure is as follows:

- `task/`: the folder that contains all of the files used for the assignment
  - `Cat.js` and `Dog.js`: classes representing a cat and a dog
  - `Data.js`: a class representing a database
  - `main.js`: file to informally test out some of the functionality of the classes described above.
  - `petShop.js`: a script that creates a pet shop and saves it to a database
  - `tests/`: contains unit tests for the Cat.js

## Why did I do things the way I did?

- I chose `JavaScript` for these tasks, as it’s the language I’m most comfortable with.

- In part 1, I translated the pseudocode into JavaScript, but I got a bit stuck on the console.log in the `Data` class constructor. The example output didn’t include it, which made me wonder if it should be removed. I couldn’t figure out a reason or a way to exclude it, and I ended up spending quite a bit of time on this. In the end, I decided to keep it, since it was specified in the pseudocode for the Data constructor.

- In part 2, I was instructed to add a few new methods and make some changes to the constructor of the class. The implementations weren’t too complicated, but I was confused by the wording about modifying the "main.pseudocode." Initially, I assumed it meant I could only change that file, which didn’t make sense to me. So, I made the changes in the way I thought was most appropriate.

- Part 3 was confusing for me because I had never worked with SQL before, and it seemed that the methods in the Data class were related to it. I had to do some research to understand what they meant and when to use them. Since no data is actually being stored in a database, I implemented the functions to the best of my understanding and knowledge.

- I skipped the SQL tasks because I’ve never worked with SQL before; the only database I’ve used is MongoDB.

- I implemented unit tests using Jest, as it’s the only unit testing framework I’m currently familiar with. Since I didn’t have much time, I decided to skip figuring out how to use Jest with ES modules and stuck to CommonJS instead, which required me to fix some imports.
    - I had to refresh my Jest skills by reading the documentation and finding out how to use some of the methods, which took time. However, I managed to implement tests for the two required methods and also tested an additional method, `getAverageNameLength`.


## My thoughts on the task:

- Overall, I view this task positively, as it required me to recall several forgotten concepts, strategize my approach, and manage my time effectively.

- I believe some parts were intentionally designed to be confusing to see how I would interpret the information and find solutions. However, if that was not the intention, I think the requirements should be updated to clarify the points I mentioned above and avoid any confusion.

- It would have been helpful to know that this assignment would require SQL, as I could have explored the concepts more deeply and possibly solved the tasks I ended up skipping.
