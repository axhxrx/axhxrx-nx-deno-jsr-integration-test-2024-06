import { dateToIS08601WithTimeZoneOffset } from '@axhxrx/date';

export class DenoCliApp
{
  log: string[] = [];

  constructor(
    readonly id: string = `DenoCliApp created at ${dateToIS08601WithTimeZoneOffset()}`,
  )
  {
    // 🌹 Hi, mom!
  }

  logMessage(message: string): void
  {
    this.log.push(message);
    console.log(message);
  }

  main(): void
  {
    this.logMessage(`Hello, this is ${this.id}`);
  }
}
