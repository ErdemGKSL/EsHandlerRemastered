module.exports = (client) => {
    client.on("ready", () => {
        console.log(client.user.tag + " is ready!")
    })
}