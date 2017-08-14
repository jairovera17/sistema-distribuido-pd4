/**
 * PartidoController
 *
 * @description :: Server-side logic for managing Partidoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  hola:function (req,res) {
    sails.log.info('hola');
    return res.ok('hola');
  },

  getProximosPartidos: function (req,res) {

    var params = req.allParams();
    var fechaHoy = new Date();
    sails.log.info('FrontEnd solicita los proximos partidos');
    Partido.find({
      fecha:{'<=':params.fechaHoy}
    }).exec(function (err,partidos) {

      if(err){
        return res.badRequest();
      }
      else return res.json(partidos);

  } );}

};

