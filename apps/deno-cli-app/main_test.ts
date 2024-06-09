import { assertEquals, assertMatch } from "jsr:@std/assert";
import { DenoCliApp } from "./DenoCliApp.ts";

Deno.test('DenoCliApp works', () => {
  const app = new DenoCliApp();
  app.main();
  assertEquals(app.log.length, 1);
  const logged = app.log[0];
  assertMatch(logged, /Hello, this is DenoCliApp created at 2/);
});
