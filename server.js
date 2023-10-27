import express from "express";
//o router será importado depois

let server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.listen(3000, function () {
    console.log("Port: 3000");
})