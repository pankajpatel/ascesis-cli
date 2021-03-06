#! /usr/bin/env node

const path = require('path');
const program = require("commander");
const file = require("./helpers/file");
const Case = require('change-case');
const pkg = require('./package');

let location = process.cwd();
let prefix = null;

program
  .version(pkg.version)
  .option("-n, --name [name]", "component name")
  .option("-d, --dir [dir]", "target directory relative or absolute path")
  .option("-p, --prefix [prefix]", "prefix for the component name and its files")
  .parse(process.argv);

if (program.dir) {
  location = path.resolve(program.dir);
}

if (program.prefix) {
  prefix = program.prefix;
}

const name = program.name;

file.createFilesInDir(Case.paramCase(name), location, prefix);
