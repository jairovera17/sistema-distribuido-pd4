/**
 * Estadio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      unique: true

    },
    ciudad:{
      type:'string'
    },
    direccion: {
      type: 'string'
    },

    idPartido:{
      collection:'Partido',
      via:'idEstadio'
    }




  }
};

