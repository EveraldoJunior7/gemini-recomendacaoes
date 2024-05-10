const obraSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  tipo_midia: {
    type: String,
    enum: [
      "livro",
      "serie",
      "anime",
      "manga",
      "filme",
      "documentario",
      "podcast",
      "jogo",
      "peca_teatro",
      "webcomic",
      "doc_serie",
      "album_musical",
    ],
    required: true,
  },
  sinopse: { type: String },
});

const Obra = mongoose.model("Obra", obraSchema);

module.exports = Obra;
