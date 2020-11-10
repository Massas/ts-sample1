import { greet } from './greet';

greet('TypeScript');

/*
$ npx tsc
$ cat dist/index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
greet_1.greet('TypeScript');

$ node dist/index.js
Hello TypeScript

$ npm install --save-dev ts-node
npm WARN Sample1@1.0.0 No description
npm WARN Sample1@1.0.0 No repository field.

+ ts-node@9.0.0
added 8 packages from 40 contributors and audited 9 packages in 1.439s
found 0 vulnerabilities

$ npx ts-node src/index.ts
Hello TypeScript
*/