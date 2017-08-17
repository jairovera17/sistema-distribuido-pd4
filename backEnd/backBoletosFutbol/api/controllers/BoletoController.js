/**
 * BoletoController
 *
 * @description :: Server-side logic for managing Boletoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  getBoletos: function (req,res) {
    var params = req.allParams();
    Boleto.find({
      idUsuario:params.idUsuario
    }).exec(function (err, boletos) {
      if(err)
        return res.badRequest('Error en boletos');
      else{
        if(boletos){
          var partidosid=[];
          var partidosasientosid=[];

          for ( var i =0;i<boletos.length;i++){
            partidosid.push(boletos[i].idPartido);
            partidosasientosid.push(boletos[i].idPartidoAsiento);

          }
          Partido.find({
            id:partidosid
          }).populate('idEstadio').populate('idEquipoLocal').populate('idEquipoVisitante').exec(function (err,partidos) {

            if(err)
              return res.badRequest('Error en Partido');
            else{
              if(partidos){
                for ( var i =0;i<boletos.length;i++){
                  for ( var j =0;j<partidos.length;j++){
                    if (boletos[i].idPartido===partidos[j].id){
                      boletos[i].idPartido=partidos[j];
                      break;
                    }

                  }
                }
                sails.log.info('deb'+partidosasientosid);
                PartidoAsiento.find({
                  id:partidosasientosid
                }).exec(function (err,partidosasientos) {
                  if(err)
                    return res.badRequest('Error en Partido Asiento');
                  else{
                    if(partidosasientos) {
                      var asientosid=[];
                      sails.log.info('pushando '+JSON.stringify(partidosasientos));
                      for ( var i =0; i<partidosasientos.length;i++) {
                        sails.log.info('push '+partidosasientos[i].idAsiento);
                        asientosid.push(partidosasientos[i].idAsiento);
                      }

                      sails.log.info('deb asiento'+asientosid);
                      Asiento.find({
                        id:asientosid
                      }).exec(function (err, asientos) {
                        if (err)
                          return res.badRequest();
                        else{
                          if(asientos){
                            for (var i = 0; i < partidosasientos.length; i++) {
                              for (var j = 0; j < asientos.length; j++) {
                                if (partidosasientos[i].idAsiento === asientos[j].id) {
                                  partidosasientos[i].idAsiento = asientos[j];

                                }

                              }
                            }
                            //////////////////////////////
                            /////////////////////////////
                            for (var i = 0; i < boletos.length; i++) {
                              for (var j = 0; j < partidosasientos.length; j++) {
                                if (boletos[i].idPartidoAsiento === partidosasientos[j].id) {
                                  boletos[i].idPartidoAsiento = partidosasientos[j];
                                  break;
                                }

                              }
                            }

                            return res.json(boletos);


                          }
                          else
                            return res.badRequest('no hay asientos  con ese idAsiento');
                        }

                      });

                    }
                    else return res.badRequest('no hay partidos asientos para ese idPartidoAsiento');
                  }
                });
              }
              else
                return res.badRequest('no hay partidos para ese idPartido');
            }

          });

        }
        else return res.badRequest('no hay boletos con ese idUsuario');
      }
    });

  }

};
