import * as p from "@clack/prompts";
import getLingo from "./lingo.js";
import writeMarkdownFile from "./writeMarkdownFile.js";
import styles from "./styles.js";
import getConfig from "./getConfig.js";
const config = await getConfig();
export default async function createPost() {
    const date = new Date();
    let postData = {
        title: "huhu",
        date: date.toString(),
        author: config.author,
        description: "",
        ...(config.hasCategories && { category: "" }),
        ...(config.hasTags && { tags: "" }),
    };
    const defaultTitle = getLingo("newpost");
    p.intro(`🤘 ${styles.intro("Let's create a new post !")}`);
    const configPost = await p.group({
        title: () => p.text({
            message: `${getLingo("greetings")} Please give me a title for your blog post`,
            placeholder: defaultTitle,
            // initialValue: defaultTitle,
            validate(value) {
                if (value.length === 0)
                    return `I need a Title!`;
            },
        }),
    }, {
        onCancel: ({ results }) => {
            p.cancel(`🫡  ${styles.alert("Okay, operation cancelled boss")}`);
            process.exit(0);
        },
    });
    if (config.hasCategories) {
        const configCategory = await p.group({
            category: () => p.text({
                message: `${getLingo("okays")} Now please enter the category of your post :`,
                placeholder: "My awesome category",
            }),
        }, {
            onCancel: ({ results }) => {
                p.cancel(`🫡  ${styles.alert("Okay, operation cancelled boss")}`);
                process.exit(0);
            },
        });
        postData.category = String(configCategory.category);
    }
    if (config.hasTags) {
        const configTags = await p.group({
            tags: () => p.text({
                message: `${getLingo("okays")} Now please enter the tags of your post (comma separated list) :`,
                placeholder: "my tag, my other tag, my third tag",
            }),
        }, {
            onCancel: ({ results }) => {
                p.cancel(`🫡  ${styles.alert("Okay, operation cancelled boss")}`);
                process.exit(0);
            },
        });
        postData.tags = String(configTags.tags);
    }
    postData.title = String(configPost.title);
    const writeReturn = writeMarkdownFile(postData);
    p.outro(`${getLingo("confirmations")} ${writeReturn}`);
}
