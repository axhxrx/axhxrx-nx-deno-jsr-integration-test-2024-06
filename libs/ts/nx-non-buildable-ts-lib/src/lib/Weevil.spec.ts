import { Weevil } from './Weevil';

describe('Weevil', () =>
{
  let weevil: Weevil;

  beforeEach(() =>
  {
    weevil = new Weevil('TestWeevil', 2);
  });

  it('should create an instance of Weevil', () =>
  {
    expect(weevil).toBeInstanceOf(Weevil);
    expect(weevil.name).toBe('TestWeevil');
    expect(weevil.age).toBe(2);
    expect(weevil.species).toBe('Weevil');
  });

  it('should make a weevil sound', () =>
  {
    const consoleSpy = jest.spyOn(console, 'log');
    weevil.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith('TestWeevil makes a weevil sound.');
    consoleSpy.mockRestore();
  });

  it('should move and log the correct message', () =>
  {
    const consoleSpy = jest.spyOn(console, 'log');
    weevil.move();
    expect(consoleSpy).toHaveBeenCalledWith(
      'TestWeevil is boring into your stored pasta.',
    );
    consoleSpy.mockRestore();
  });

  it('should override makeSound method', () =>
  {
    expect(weevil.makeSound).toBeDefined();
  });

  it('should override move method', () =>
  {
    expect(weevil.move).toBeDefined();
  });
});
