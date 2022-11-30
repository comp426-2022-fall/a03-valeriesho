#!/usr/bin/env node

import minimist from "minimist";
import { roll } from "/lib/roll.js";

const args = minimist(process.argv.slice(2));

var sides = 6;
var dice = 2;
var rolls = 1;
if (args.sides) {
    sides = args.sides;
}
if (args.dice) {
    dice = args.dice;
}
if (args.rolls) {
    rolls = args.rolls;
}

