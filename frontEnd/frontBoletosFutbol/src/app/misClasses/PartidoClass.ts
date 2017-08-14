import {Estadio} from "./EstadioClass";
import {Equipo} from "./EquipoClass";
import {PartidoAsiento} from "./PartidoAsientoClass";
/**
 * Created by jairo on 13/08/17.
 */

export class Partido {
  constructor(
    public id?,
    public idEquipoLocal?,
    public idEquipoVisitante?,
    public idEstadio?,
    public fecha?: Date,
    public asientos?: PartidoAsiento[],
    public showBoletos?: boolean
  ){}
}
