const fs = require("fs");

const readJsonFile = (filepath, encoding = "utf8") => {
    let content = "";
    try {
        const file = fs.readFileSync(filepath, encoding);
        content = JSON.parse(file);
    } catch (err) {
        console.log(err);
    }
    return content;
};

module.exports = readJsonFile;
