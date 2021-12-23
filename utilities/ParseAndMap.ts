import { open } from "fs/promises";
const InputMap = new Map();

const setMap = (filePath: string) => {
    let file = open("../MapFiles/InputMap.txt", "r");

    console.log(file);
};