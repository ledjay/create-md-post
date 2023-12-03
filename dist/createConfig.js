import * as p from "@clack/prompts";
import getLingo from "./lingo.js";
import writeConfigFile from "./writeConfigFile.js";
import styles from "./styles.js";
export default async function createConfig() {
    let configData = {
        path: "/blog",
        extention: ".md",
        author: "John Doe",
        hasCategories: true,
        hasTags: false,
    };
    const configPrompts = await p.group({
        intro: () => {
            p.intro(`🤓 ${styles.intro("Configuration mode")}`);
        },
        path: () => p.text({
            message: `${getLingo("greetings")} Where should I put your awesome blog files ?`,
            placeholder: "/posts",
            initialValue: "/posts",
            validate(value) {
                if (value.length === 0)
                    return `I need a folder!`;
            },
        }),
        extention: () => p.select({
            message: "Choose your markdown file type.",
            initialValue: ".md",
            options: [
                { value: ".md", label: ".md" },
                { value: ".mdx", label: ".mdx" },
            ],
        }),
        author: () => p.text({
            message: `${getLingo("okays")} What's your Author's name for this blog?`,
            placeholder: "The Amazing John/Jane Doe",
            validate(value) {
                if (value.length === 0)
                    return `Sorry but I need a name to sign your posts!`;
            },
        }),
        hasCategories: () => p.select({
            message: "Nice, will you use categories?",
            initialValue: true,
            options: [
                { value: true, label: "Sure!" },
                { value: false, label: "No thanks." },
            ],
        }),
        hasTags: () => p.select({
            message: "Okay! And will you use tags?",
            initialValue: true,
            options: [
                { value: true, label: "Okay, why not!" },
                { value: false, label: "Nope..." },
            ],
        }),
        outro: ({ results }) => {
            p.outro(`Okay dear ${String(styles.highlight(results.author))}, you will find your ${String(styles.highlight(results.extention))} files inside the ${String(styles.highlight(results.path))} folder.`);
        },
    }, {
        onCancel: ({ results }) => {
            p.cancel(`🫡  ${styles.alert("Okay, operation cancelled boss")}`);
            process.exit(0);
        },
    });
    configData = configPrompts;
    writeConfigFile(configData);
}
