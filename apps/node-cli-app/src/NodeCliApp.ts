import * as mod from "@axhxrx/date";
export class NodeCliApp
{
  constructor(
    readonly id: string = `NodeCliApp created at ${mod.dateToIS08601WithTimeZoneOffset()}`,
  )
  {
    // 🌹 Hi, mom!
  }

  main(): void
  {
    console.log(`Hello, this is ${this.id}`);
  }
}
