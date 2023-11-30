import fs from "fs";
import path from "path";
export default async function getConfig() {
    const configPath = path.join(process.cwd(), ".create-md-post-rc");
    try {
        const data = await fs.promises.readFile(configPath, "utf8");
        return JSON.parse(data);
    }
    catch (err) {
        console.log(err);
    }
}
