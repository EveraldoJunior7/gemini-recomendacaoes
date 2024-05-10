const avaliacaoSchema = new mongoose.Schema({
  obra: { type: mongoose.Schema.Types.ObjectId, ref: "Obra", required: true },
  classificacao: { type: Number, min: 1, max: 10, default: 1 },
});

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema);

module.exports = Avaliacao;
