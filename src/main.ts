#!/usr/bin/env node
import fs from "fs";
import createPost from "./createPost.js";
import createConfig from "./createConfig.js";
import { program } from "commander";

program.option("--configure");
program.parse();

const options = program.opts();

const configMode = options.configure ? true : false;

const configFilePath = "./.create-md-post-rc";

console.log(configMode);

try {
  if (!fs.existsSync(configFilePath) || configMode) {
    createConfig();
  } else {
    createPost();
  }
} catch (err) {
  console.error(err);
}
