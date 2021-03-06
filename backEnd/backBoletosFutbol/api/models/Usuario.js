/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
//hola
    nombre:{
      type:'string',
      required:true
    },

    nickname:{
      type:'string',
      required:true,
      unique:true
    },

    password:{
      type:'string',
      required:true
    },

    idBoleto:{
      collection:'Boleto',
      via:'idUsuario'
    }

  }
};

