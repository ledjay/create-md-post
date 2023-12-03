import fs from "fs";
import path from "path";
import { configFileType } from "./types.js";

export default function writeConfigFile(configData: configFileType) {
  // const basename = "huhu";
  const filePath = path.join(process.cwd(), ".create-md-post-rc");
  const fileContent = JSON.stringify(configData);

  fs.writeFileSync(filePath, fileContent);

  return "Your configuration file .crate-md-post-rc is set.\n Please run npx creata-md-post command again to create your first post";
}
