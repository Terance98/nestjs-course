class Vehicle {
  //   public drive(): void {
  //     console.log(`chugga chugga`);
  //   }
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {}
  protected honk(): void {
    console.log(`beep`);
  }
}

const vehicle = new Vehicle("orange");
// vehicle.honk;

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.color, this.wheels);
  }
}

const car = new Car(4, "green");
car.startDrivingProcess();
// car.honk();
