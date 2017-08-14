/**
 * Asiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    seccion:{
      type:'string'
    },
    fila:{
      type:'string'
    },
    numero:{
      type:'string'
    },

    idPartidoAsiento:{
      collection:'PartidoAsiento',
      via:'idAsiento'
    }



  }
};

