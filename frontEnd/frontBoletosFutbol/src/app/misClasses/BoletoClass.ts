import {Usuario} from "./UsuarioClass";
import {Partido} from "./PartidoClass";
import {PartidoAsiento} from "./PartidoAsientoClass";
/**
 * Created by root on 17/08/17.
 */


export class Boleto{
  constructor(
    public idUsuario: Usuario,
    public idPartido: Partido,
    public idPartidoAsiento: PartidoAsiento,
  ) {}
}
