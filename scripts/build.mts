import { $, cd, echo } from 'zx';

console.log($.shell);

await $`pwd`;
cd('./simple-mind-map');
await $`npm install`;
cd('../web');
await $`npm install`;
await $`npm run build`;
