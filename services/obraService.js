const Obra = require('../models/obra');

async function criarObra(titulo, tipoMidia, sinopse) {
  return await Obra.create({ titulo, tipoMidia, sinopse });
}

module.exports = {
  criarObra,
};
