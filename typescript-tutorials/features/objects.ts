const profile = {
  names: "alex",
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, names }: { age: number; names: string } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
