import { DenoCliApp } from "./DenoCliApp.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const app = new DenoCliApp();
  app.main();
}
