const path = require("path");
const tinify = require("tinify");
const glob = require("glob");
tinify.key = "C99mkGTfmwymq4FWSKTV1nQxVSw3lF1N";
const rootPath = process.cwd();
const imgFormat = ["png", 'jpeg'];
glob(path.join(rootPath, `**/*.{${imgFormat.join(",")}}`), {}, function (err, files) {
    for (let i = 0; i < files.length; i++) {
        const path = files[i];
        tinify.fromFile(path).toFile(path).catch((res) => {
            console.log(res)
        });
    }
})
