import {Component, Input, OnInit} from '@angular/core';
import {Partido} from "../misClasses/PartidoClass";
import {Equipo} from "../misClasses/EquipoClass";
import {Estadio} from "../misClasses/EstadioClass";

@Component({
  selector: 'app-proximos-partidos-view',
  templateUrl: './proximos-partidos-view.component.html',
  styleUrls: ['./proximos-partidos-view.component.css']
})
export class ProximosPartidosViewComponent implements OnInit {

  @Input() proximosPartidos: Partido[];
  @Input() equipos: Equipo[];
  @Input() estadios: Estadio[];
  showPartidos: boolean;
  workingPartidos: Partido[];
  constructor() { }

  ngOnInit() {
    this.showPartidos = false;
  }

  emparentar(){
    this.showPartidos = true;

    for ( var  i = 0; i < this.proximosPartidos.length; i++) {
      this.proximosPartidos[i].idEquipoVisitante = this.equipos[this.proximosPartidos[i].idEquipoVisitante];
      this.proximosPartidos[i].idEquipoLocal = this.equipos[this.proximosPartidos[i].idEquipoLocal];
      this.proximosPartidos[i].idEstadio = this.estadios[this.proximosPartidos[i].idEstadio];
    }

  }

}
