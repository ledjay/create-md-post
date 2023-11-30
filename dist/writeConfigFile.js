import fs from "fs";
import path from "path";
export default function writeConfigFile(configData) {
    // const basename = "huhu";
    const filePath = path.join(process.cwd(), ".create-md-post-rc");
    const fileContent = JSON.stringify(configData);
    fs.writeFileSync(filePath, fileContent);
    console.log("File done");
}
