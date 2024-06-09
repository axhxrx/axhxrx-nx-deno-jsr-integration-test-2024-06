import { Tarantula } from "./Tarantula";

describe("Tarantula", () => {
  it("should create an instance of Tarantula with the correct properties", () => {
    const tarantula = new Tarantula("Harry", 5);
    expect(tarantula.name).toEqual("Harry");
    expect(tarantula.age).toEqual(5);
    expect(tarantula.species).toEqual("Tarantula");
  });

  it("should make a hissing sound", () => {
    const tarantula = new Tarantula("Harry", 5);
    const consoleSpy = jest.spyOn(console, "log");
    tarantula.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith("Harry hisses.");
    consoleSpy.mockRestore();
  });

  it("should crawl when moving", () => {
    const tarantula = new Tarantula("Harry", 5);
    const consoleSpy = jest.spyOn(console, "log");
    tarantula.move();
    expect(consoleSpy).toHaveBeenCalledWith("Harry crawls.");
    consoleSpy.mockRestore();
  });

  it("should override makeSound method", () => {
    const tarantula = new Tarantula("Harry", 5);
    expect(tarantula.makeSound).toBeDefined();
  });

  it("should override move method", () => {
    const tarantula = new Tarantula("Harry", 5);
    expect(tarantula.move).toBeDefined();
  });
});
