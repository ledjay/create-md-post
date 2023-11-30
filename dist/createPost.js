import input from "@inquirer/input";
import getLingo from "./lingo.js";
import writeMarkdownFile from "./writeMarkdownFile.js";
export default async function createPost() {
    const date = new Date();
    let postData = {
        title: "huhu",
        date: date.toString(),
        description: "lol",
    };
    const title = await input({
        message: `${getLingo("greetings")} Please give me a title for your blog post`,
    });
    postData.title = title;
    writeMarkdownFile(postData);
}
