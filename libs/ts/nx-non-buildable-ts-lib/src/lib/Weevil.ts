import { Animal } from '@ts/nx-buildable-tsc-lib';

export class Weevil extends Animal
{
  constructor(name: string, age: number)
  {
    super(name, age, 'Weevil');
  }

  override makeSound(): void
  {
    console.log(`${this.name} makes a weevil sound.`);
  }

  override move(): void
  {
    console.log(`${this.name} is boring into your stored pasta.`);
  }
}
