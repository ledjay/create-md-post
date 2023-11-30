const strings = {
    greetings: ["Howdy!", "Hey there!", "Hello you, sexy thing."],
    okays: ["Okay!", "Nice.", "Perfect!"],
};
export default function getLingo(key) {
    return strings[key][Math.floor(Math.random() * strings[key].length)];
}
