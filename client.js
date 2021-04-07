const net = require('net');

// Sim, é invertido
const socket = net.connect(3000, "localhost")

socket.write("Usuário entrou no canal")