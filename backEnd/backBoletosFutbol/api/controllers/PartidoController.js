/**
 * PartidoController
 *
 * @description :: Server-side logic for managing Partidoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  hola:function (req,res) {

    return res.ok('hola');
  },

  getProximosPartidos: function (req,res) {

    var params = req.allParams();
    var fechaHoy = new Date();
    sails.log.info('FrontEnd solicita los proximos partidos');
    Partido.find({
      fecha:{'>=':fechaHoy}
    }).exec(function (err,partidos) {

      if (err) {
        return res.badRequest();
      }
      else return res.json(partidos);

    });

  },


  validarCompra :function (req,res) {

    var params = req.allParams();

    Usuario.findOne({
      nickname:params.usuarionick
    }).exec(function (err, user) {
      sails.log.info('El usuario '+JSON.stringify(user)+'intentara realizar la compra de un boleto');

      if(err)
        return res.badRequest();
      else{
        if(user){

          Boleto.find({
            idUsuario:user.id,
            idPartido:params.idPartido
          }).exec(function (err,boleto) {
         //   sails.log.info(boleto);
         //   sails.log.info(err);
            if(err)
                return res.badRequest();
              else{
                sails.log.info('En ese partido el usuario tiene '+boleto.length+' comprado');
                if(!boleto||boleto.length<5){
                //  sails.log.info('estoy dentro');

                  PartidoAsiento.findOne({
                    precio:params.precio,
                    idPartido:params.idPartido,
                    id:params.idPartidoAsiento,
                    disponible:true
                  }).exec(function (err,partidoAsiento){
                   // sails.log.info(partidoAsiento);
                   // sails.log.info(err);
                    if(err)
                      return res.badRequest();
                    else{
                      if(partidoAsiento){
                        PartidoAsiento.update({
                          id:partidoAsiento.id
                        },{
                          disponible:false
                        }).exec(function (err, finalres) {
                         // sails.log.info(finalres);
                         // sails.log.info(err);
                          if(err)
                            return res.badRequest();
                          else{
                            Boleto.create({
                              idUsuario:user.id,
                              idPartido:params.idPartido,
                              idPartidoAsiento:params.idPartidoAsiento
                            }).exec(function (err,nuevoBoleto) {
                              if(err)
                                return res.badRequest();
                              else
                                return res.json(nuevoBoleto);

                            })
                            //return res.json(finalres);
                          }


                        });
                      }
                      else{
                        return res.badRequest();
                      }
                    }

                  });

                }
                else
                  return res.badRequest('no mas boletos para ti en ese partido');
              }
          });
         /* PartidoAsiento.findOne({
              precio:params.precio,
            idPartido:params.idPartido,
            id:params.idPartidoAsiento
          }).exec(function (err,partidoAsiento){
            if(err)
              return res.badRequest();
            else{
              if(partidoAsiento){
                PartidoAsiento.update({
                  id:partidoAsiento.id
                },{
                  disponible:false
                }).exec(function (err, finalres) {
                  if(err)
                    return res.badRequest();
                  else
                    return res.json(finalres);

                });
              }
                else{
                return res.badRequest();
              }
            }

          });*/

        }
        else{
          return res.badRequest();
        }
      }
    });

    }

  }

;

