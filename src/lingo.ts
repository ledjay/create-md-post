import { lingoStringsTypes } from "./types.js";
const strings: lingoStringsTypes = {
  greetings: ["Howdy!", "Hey there!", "Hello you, sexy thing."],
  okays: ["Okay!", "Nice.", "Perfect!"],
};

export default function getLingo(key: string) {
  return strings[key][Math.floor(Math.random() * strings[key].length)];
}
