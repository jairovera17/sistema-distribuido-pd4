import {Partido} from "./PartidoClass";
/**
 * Created by jairo on 13/08/17.
 */

export class PartidoAsiento {
  constructor(
    public id: number,
    public idAsiento,
    public precio: number,
    public disponible: boolean,
    public idPartido
  ){}
}
