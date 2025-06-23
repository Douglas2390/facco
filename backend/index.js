const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Backend ativo!"));
app.listen(3000, () => console.log("Rodando na porta 3000"))