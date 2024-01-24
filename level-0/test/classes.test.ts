import { Eagle, EagleRun, Rabbit } from "../src/classes";

describe("Test Classes", function () {
  it("Test Class Rabbit", function () {
    const myRabbit = new Rabbit("Labi", 2);
    console.info(myRabbit.eat());
    expect(myRabbit.eat()).toBe("Labi yang berumur 2 sedang makan!");
  });
  it("Test Class Eagle", function () {
    const myEagle = new Eagle("Elo", 4);
    console.info(myEagle.fly());
    expect(myEagle.fly()).toBe("Elo yang berumur 4 sedang terbang!");
  });
  it("Test Class EagleRun", function () {
    const speedTest = new EagleRun("Labi", 4, 220);
    console.info(speedTest.runEagle());
    expect(speedTest.runEagle()).toBe("Labi berlari dengan kecepatan 220 km");
  });
});
