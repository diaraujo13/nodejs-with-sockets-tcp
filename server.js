// Servidor TCP

const net = require("net")

// Criado um servidor escutando na porta 3000
net.createServer((socket) => {
    console.log("Cliente conectado")

    socket.on("data", (data) => {
        socket.write(data);
    })

}).listen(3000, "localhost")
