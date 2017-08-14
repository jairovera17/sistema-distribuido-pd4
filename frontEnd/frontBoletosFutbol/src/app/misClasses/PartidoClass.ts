import {Estadio} from "./EstadioClass";
import {Equipo} from "./EquipoClass";
/**
 * Created by jairo on 13/08/17.
 */

export class Partido {
  constructor(
    public idEquipoLocal?,
    public idEquipoVisitante?,
    public idEstadio?,
    public fecha?: Date
  ){}
}
