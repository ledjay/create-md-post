import input from "@inquirer/input";
import getLingo from "./lingo.js";
import writeConfigFile from "./writeConfigFile.js";
import { configFileType } from "./types.js";

export default async function createConfig() {
  let configData: configFileType = {
    path: "/blog",
  };

  const path = await input({
    message: `${getLingo(
      "greetings"
    )} Where should I put your awesome blog files ?`,
    default: "/posts",
  });

  configData.path = path;

  writeConfigFile(configData);
}
