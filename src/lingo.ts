import { lingoStringsTypes } from "./types.js";
const strings: lingoStringsTypes = {
  greetings: ["Howdy!", "Hey there!", "Hello you, sexy thing."],
  okays: ["Okay!", "Nice.", "Perfect!"],
  confirmations: ["Copy that!", "Roger Cap'tain.", "You're all set."],
  newpost: [
    "My awesome post",
    "Me, myself and I",
    "The story of my life",
    "How to blog like a BO$$",
  ],
};

export default function getLingo(key: string) {
  return strings[key][Math.floor(Math.random() * strings[key].length)];
}
