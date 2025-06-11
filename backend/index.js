const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const pacienteRoutes = require("./routes/paciente");
const medicoRoutes = require("./routes/medico");
const recepcionistaRoutes = require("./routes/recepcionista");
const consultaRoutes = require("./routes/consulta");
const historicoRoutes = require("./routes/historico");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/pacientes", pacienteRoutes);
app.use("/api/medicos", medicoRoutes);
app.use("/api/recepcionistas", recepcionistaRoutes);
app.use("/api/consultas", consultaRoutes);
app.use("/api/historico", historicoRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "UP", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
