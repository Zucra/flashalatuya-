const {
  baseDeDatosCarrera,
} = require('./db')

// codigos
function consultInfoDeCarrita(id) {
  const carrera = baseDeDatosCarrera.dameInfoDelId(id);

  //const ? = baseDeDatosParticipantes.dameInfoDelId(id);

  return {
    //   ?: ?,
  }
}

module.exports = {
  consultInfoDeCarrita,
}
