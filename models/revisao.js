const revisaoSchema = new mongoose.Schema({
    obra: { type: mongoose.Schema.Types.ObjectId, ref: "Obra", required: true },
    texto: { type: String },
  });
  
  const Revisao = mongoose.model("Revisao", revisaoSchema);
  
  module.exports = Revisao;