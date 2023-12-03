import fs from "fs";
import yaml from "yaml";
import slugify from "slugify";
import path from "path";
import { postDataType } from "./types.js";
import styles from "./styles.js";
import getConfig from "./getConfig.js";
import { configFileType } from "./types.js";

const config: configFileType = await getConfig();
export default function writeMarkdownFile(postData: postDataType) {
  const postsDir = config.path;

  checkOrCreateFolder(postsDir);

  const basename = slugify(postData.title, { strict: true, lower: true });
  const filePath = path.join(
    path.join(process.cwd(), postsDir),
    `${basename}${config.extention}`
  );
  const fileContent = `---\n${yaml.stringify(postData)}---\n\n\n`;

  fs.writeFileSync(filePath, fileContent);

  return `Your post is ready here : ${styles.highlight(
    `${postsDir}/${basename}${config.extention}`
  )}.`;
}

function checkOrCreateFolder(folder: string) {
  const folderPath = path.join(process.cwd(), folder);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}
