// import { readFile } from "fs/promises";
// import * as fs from "fs";
import { readFile } from "fs"; 

const InputMap = new Map();
let fileContents = "";

const setMap = async (filePath) => {
    
    await readFile(filePath, async (err, data) => {
        if(err) {
            return console.log(err);
        }
        prepareMapFile(data);
    });
};

const prepareMapFile = (data) => {
    fileContents = data.toString();

    fileContents.split("\n").forEach(line => {
        // console.log(line.length);
        if(line.startsWith("//")) {
            console.log("Skip");
        }
        else if(line.length <= 1) {
            console.log("Empty");
        }
        else {
            InputMap.set(line.split("==")[0].toString().trim(), line.split("==")[1].toString().trim());
        }
    });

    console.log(InputMap);

    console.log(InputMap.get("requiredInput"));
}

let path = "C:/Users/sinmmi/PlaywrightProjects/FirstPlaywrightProject/MapFiles/InputMap.txt";
setMap(path)