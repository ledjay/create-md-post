import fs from "fs";
import yaml from "yaml";
import slugify from "slugify";
import path from "path";
import getConfig from "./getConfig.js";
const config = await getConfig();
export default function writeMarkdownFile(postData) {
    const postsDir = config.path;
    checkOrCreateFolder(postsDir);
    // return;
    const basename = slugify(postData.title, { strict: true, lower: true });
    // const basename = "huhu";
    const filePath = path.join(path.join(process.cwd(), postsDir), `${basename}.md`);
    const fileContent = `---\n${yaml.stringify(postData)}---\n\nhuhu\n`;
    fs.writeFileSync(filePath, fileContent);
    console.log("File done");
}
function checkOrCreateFolder(folder) {
    const folderPath = path.join(process.cwd(), folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
}
