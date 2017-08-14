import { Component, OnInit } from '@angular/core';
import {Partido} from "../misClasses/PartidoClass";
import {PartidosService} from "../partidos.service";
import {Equipo} from "../misClasses/EquipoClass";

import 'rxjs/add/operator/map';
import {Estadio} from "../misClasses/EstadioClass";

@Component({
  selector: 'app-view-partidos',
  templateUrl: './view-partidos.component.html',
  styleUrls: ['./view-partidos.component.css']
})
export class ViewPartidosComponent implements OnInit {

  proximosPartidos: Partido[];
  equipos: Equipo[];
  estadios: Estadio[];
  constructor(private partidoservice: PartidosService) { }

  ngOnInit() {

    this.partidoservice.getProximosPartidos()
      .subscribe(
        res=>{

          let rjson: Partido[] = res.json();
         this.proximosPartidos =rjson;

        },
        err=>{
          console.log('error en ngoninit de view partidos');
        }
      );

    this.partidoservice.getEquipos()
      .subscribe(
        res=>{

          let rjson: Equipo[] = res.json();
          this.equipos = rjson;

        },
        err=>{
          console.log('error en ngoninit de view partidos');
        }
      );
    this.partidoservice.getEstadios()
      .subscribe(
        res=>{
          let rjson: Estadio[] = res.json();

          this.estadios = rjson;
        },
        err=>{
          console.log('error en ngoninit de view partidos');
        }
      );



  }

}
