import { dateToIS08601WithTimeZoneOffset } from '@axhxrx/date';
export class NodeCliApp
{
  constructor(
    readonly id: string = `NodeCliApp created at ${dateToIS08601WithTimeZoneOffset()}`,
  )
  {
    // 🌹 Hi, mom!
  }

  main(): void
  {
    console.log(`Hello, this is ${this.id}`);
  }
}
