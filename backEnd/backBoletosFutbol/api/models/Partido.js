/**
 * Partido.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idEquipoLocal:{
      model:'Equipo',
      required:true
    },

    idEquipoVisitante:{
      model:'Equipo',
      required:true
    },

    idEstadio:{
      model:'Estadio',
      required:true
    },

    fecha:{
      type:'date',
      required: true
    },

    idBoleto:{
      collection:'PartidoAsiento',
      via:'idPartido'
    }



  }
};

