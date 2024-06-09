export class NodeCliApp
{
  constructor(
    readonly id: string = `NodeCliApp created at ${new Date().toISOString()}`,
  )
  {
    // 🌹 Hi, mom!
  }

  main(): void
  {
    console.log(`Hello, this is ${this.id}`);
  }
}
