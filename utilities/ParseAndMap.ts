import { readFile } from "fs";
const inputMap = new Map();

export const setMap = async (filePath: string) => {
    await readFile(filePath, async (error, data) => {
        if(error) {
            console.log("Error == " + error);
            return error;
        }

        
    });
};

const prepareMapFile = (data: string) => {
    let fileContents = data.toString();

    fileContents.split("\n").forEach( (line) => {
        if(line.startsWith("//")) {
            console.log("Skip");
        }
        else if(line.length <= 1) {
            console.log("Empty");
        }
        else {
            let keyValuePair = line.split("==");
            inputMap.set(keyValuePair[0].trim(), keyValuePair[1].trim());
        }
    });

    console.log(inputMap);
}