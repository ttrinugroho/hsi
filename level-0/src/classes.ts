export class Animal {
  name: string;
  age: number;
  isMammal: boolean;
  constructor(name: string, age: number, isMammal: boolean) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
export class Rabbit extends Animal {
  constructor(name: string, age: number) {
    super(name, age, true);
  }
  eat(): string {
    return `${this.name} yang berumur ${this.age} sedang makan!`;
  }
}

export class Eagle extends Animal {
  constructor(name: string, age: number) {
    super(name, age, false);
  }
  fly(): string {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  }
  protected run(speed: number): string {
    return `${this.name} berlari dengan kecepatan ${speed} km`;
  }
}

export class EagleRun extends Eagle {
  speed: number;
  constructor(name: string, age: number, speed: number) {
    super(name, age);
    this.speed = speed;
  }
  runEagle(): string {
    return this.run(this.speed);
  }
}
