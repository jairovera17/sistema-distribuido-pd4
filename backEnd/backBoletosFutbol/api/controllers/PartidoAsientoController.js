/**
 * PartidoAsientoController
 *
 * @description :: Server-side logic for managing Partidoasientoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getProximosPartidoAsiento: function (req, res) {

    var fechaHoy = new Date();
    Partido.find({
      fecha:{'>=':fechaHoy}
    }).exec(function (err,partidos) {

      if (err) {
        return res.badRequest();
      }
      else {
        var partidosid=[];
        for( var i =0 ;i<partidos.length;i++)
          partidosid.push(partidos[i].id);

        PartidoAsiento.find({
          idPartido: partidosid
        }).exec(function (err, partidoAsientos) {

          if(err)
            return res.badRequest();
          else
            return res.json(partidoAsientos);
        });
      }
        //return res.json(partidos);

    });

  }


};

