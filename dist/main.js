#!/usr/bin/env node
import fs from "fs";
import createPost from "./createPost.js";
import createConfig from "./createConfig.js";
const configFilePath = "./.create-md-post-rc";
try {
    if (fs.existsSync(configFilePath)) {
        createPost();
    }
    else {
        createConfig();
    }
}
catch (err) {
    console.error(err);
}
