const fs = require("fs");
const path = require("path");

const templateFile = path.join(__dirname, "CompleteDocument.html");
const outputFile = path.join(__dirname, "Library", "tagLibrary.json");

const tags = {};

const content = fs.readFileSync(templateFile, "utf8");

const matches = content.match(/\{\{[^}]+\}\}/g);

if (matches) {

    matches.forEach(match => {

        const tagName = match
            .replace("{{", "")
            .replace("}}", "")
            .trim();

        if (!tags[tagName]) {

            tags[tagName] = {
                occurrences: 1,
                type: "",
                description: ""
            };
        }
        else {

            tags[tagName].occurrences++;
        }
    });
}

const sortedTags = Object.fromEntries(
    Object.entries(tags)
        .sort(([a], [b]) => a.localeCompare(b))
);

fs.writeFileSync(
    outputFile,
    JSON.stringify(sortedTags, null, 4)
);

console.log(
    `Generated ${Object.keys(sortedTags).length} unique tags`
);