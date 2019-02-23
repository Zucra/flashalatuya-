const {
  datos: {
    particantes,
    carreritas,
  }
} = require('./db');

const {
  consultInfoDeCarrita: funcionATestear,
} = require('./logic');


const casosDeTest = [{
  argumento: carreritas.id1.id,
  resultado: {
    infoCarrera: carreritas.id1,
    particantes: {
      juan: {
        edad: 69
      }
    }
  }
}]

// escenario simple
testSimple(casosDeTest[0].argumento, casosDeTest[0].resultado);
// con numero negativa

//


function testSimple(id, resultadoEsperado) {
  const resultado = funcionATestear(id);
  console.log('resultado es', resultado);
  console.log('deberia ser', resultadoEsperado);
}
