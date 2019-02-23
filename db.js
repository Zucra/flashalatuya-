
// datos de prueba
const carreritas = {
  id1: {
    id: 'id1',
    name: 'asda',
    participantes: ['juan'],
  },
  id2: {
    id: 'id2',
    name: 'asdqwe',
    participantes: ['juan', 'pedro'],
  },
}
const particantes = {
  juan: {

  },
}
const baseDeDatosCarrera = {
  dameInfoDelId(id) {
    return carreritas[id]
  }
}
const baseDeDatosParticipantes = {
  dameInfoDelId(id) {
    return particantes[id]
  }
}


module.exports = {
  baseDeDatosCarrera,
  baseDeDatosParticipantes,
  datos: {
    carreritas,
    particantes
  }
}
