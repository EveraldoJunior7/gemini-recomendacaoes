const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose
  .connect("mongodb://localhost:27017/gemini-recomendacoes")
  .then(() => console.log("Conexão com o MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
