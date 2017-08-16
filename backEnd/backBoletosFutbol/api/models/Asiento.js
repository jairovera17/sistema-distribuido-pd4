/**
 * Asiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    seccion:{
      type:'string',
      required:true
    },
    fila:{
      type:'string',
      required:true
    },
    numero:{
      type:'string',
      required:true
    },

    idPartidoAsiento:{
      collection:'PartidoAsiento',
      via:'idAsiento'
    }



  }
};

