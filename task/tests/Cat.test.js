const Cat = require("../Cat");

describe("Testing cat's initial age", () => {
  test("initial age should be between 5 and 10", () => {
    const cat = new Cat();
    expect(cat.age).toBeGreaterThanOrEqual(5);
    expect(cat.age).toBeLessThanOrEqual(10);
  });
});

describe("Testing cat's speak method", () => {
  test("speak should log the correct sound", () => {
    const logSpy = jest.spyOn(console, "log");
    const cat = new Cat();

    cat.speak();
    expect(logSpy).toBeCalledWith("meow");
    expect(logSpy.mock.calls).toContainEqual(["meow"]);

    cat.speak("moo");
    expect(logSpy).toBeCalledWith("moo");
    expect(logSpy.mock.calls).toContainEqual(["moo"]);

    cat.speak("woof");
    expect(logSpy).toBeCalledWith("woof");
    expect(logSpy.mock.calls).toContainEqual(["woof"]);

    cat.speak("yeeehaw");
    expect(logSpy).toBeCalledWith("yeeehaw");
    expect(logSpy.mock.calls).toContainEqual(["yeeehaw"]);

    cat.speak("purrr");
    expect(logSpy).toBeCalledWith("purrr");
    expect(logSpy.mock.calls).toContainEqual(["purrr"]);

    logSpy.mockRestore();
  });

  test("speakCount should be incremented", () => {
    const cat = new Cat();
    cat.speak();
    expect(cat.speakCount).toBe(1);
    cat.speak();
    expect(cat.speakCount).toBe(2);
    cat.speak();
    expect(cat.speakCount).toBe(3);
    cat.speak();
    expect(cat.speakCount).toBe(4);
  });

  test("Cat's age should be incremented every 5th speak call", () => {
    const cat = new Cat();
    const initialAge = cat.age;
    const amountOfSpeaks = 100;
    for (let i = cat.speakCount; i < amountOfSpeaks; i++) {
      cat.speak();
    }
    expect(cat.age).toBe(initialAge + amountOfSpeaks / 5);
  });
});


describe("Testing cat's getAverageNameLength method", () => {
  test("getAverageNameLength should return the average length of names", () => {
    const cat = new Cat("123456789");
    cat.setName("12345")
    cat.setName("1")
    cat.setName("1234")
    expect(cat.getAverageNameLength()).toBe(19/4);
  });
}) 