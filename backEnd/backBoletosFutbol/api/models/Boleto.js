/**
 * Boleto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idUsuario:{
      model:'Usuario',
      required:true
    },

    idPartido:{
      model:'Partido',
      required:true
    },


    idPartidoAsiento:{
      model:'PartidoAsiento',
      required:true
    }


  }
};

