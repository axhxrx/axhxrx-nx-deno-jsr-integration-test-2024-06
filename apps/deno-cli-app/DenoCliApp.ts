export class DenoCliApp
{
  log: string[] = [];

  constructor(
    readonly id: string = `DenoCliApp created at ${new Date().toISOString()}`,
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
