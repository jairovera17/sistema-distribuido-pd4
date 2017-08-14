/**
 * PartidoAsiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    idAsiento:{
      model:'Asiento',
      required:true,
    },

    precio:{
      type:'string',
      required:true
    },

    disponible:{
      type:'boolean',
      required:true
    },

    idPartido:{
      model:'Partido',
      required:true
    },

    idBoleto:{
      collection:'Boleto',
      via:'idPartidoAsiento'
    }



  }
};

