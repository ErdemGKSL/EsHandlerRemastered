const { Client } = require("discord.js");
const fs = require("fs");
var oku = (files) => fs.readFileSync(files, "utf8");
var yazdir = (files, data) => fs.writeFileSync(files, data);
let mainPath = process.cwd();
let pathlist = mainPath + "\\events";
let setup = async () => {
	if (!fs.existsSync(pathlist)) {
		await fs.mkdirSync(pathlist, {
			recursive: true
		});
		let example = await oku(__dirname + "\\examples\\event.js");
		await yazdir(pathlist + "\\example.js", example);
	}
};
/**
 * @param {Client} client
 */
function myTrigger(client) {
	setup();
	fs.readdirSync(mainPath + "\\events").forEach((file) => {
        if(!file) return;
        let fpath = mainPath + "\\events\\" + file;
        let event = require(fpath);
        event(client)
        let name = file.slice(0,file.length -2);
        console.log(`[Agaue] Loaded ${name} Event.`);
    });
}
module.exports = myTrigger;