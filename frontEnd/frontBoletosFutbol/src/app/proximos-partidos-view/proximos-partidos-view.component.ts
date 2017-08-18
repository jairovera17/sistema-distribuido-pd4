import {Component, Input, OnInit} from '@angular/core';
import {Partido} from "../misClasses/PartidoClass";
import {Equipo} from "../misClasses/EquipoClass";
import {Estadio} from "../misClasses/EstadioClass";
import {PartidoAsiento} from "../misClasses/PartidoAsientoClass";
import {PartidosService} from "../partidos.service";
import {Asiento} from "../misClasses/AsientoClass";
import {UsuarioLogService} from "../usuario-log.service";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-proximos-partidos-view',
  templateUrl: './proximos-partidos-view.component.html',
  styleUrls: ['./proximos-partidos-view.component.css']
})
export class ProximosPartidosViewComponent implements OnInit {

  @Input() proximosPartidos: Partido[];
  @Input() equipos: Equipo[];
  @Input() estadios: Estadio[];
  @Input() asientos: Asiento[];
  partidoAsiento: PartidoAsiento[];
  showPartidos: boolean;
  workingPartidos: Partido[];
  constructor(private partidoservice: PartidosService, private _userService: UsuarioLogService) { }

  ngOnInit() {
    this.showPartidos = false;
    this.partidoservice.getPartidoAsientos()
      .subscribe(
        res=>{
          let rjson : PartidoAsiento[] = res.json();
          this.partidoAsiento = rjson.map((partAsiento: PartidoAsiento) => {

            partAsiento.error = false;
            return partAsiento;
          });
        },
        err=>{
          console.log('error en no on init de proximos partidos');
        }
      );
  }

  emparentar(){

    this.showPartidos = true;
    console.log(this.proximosPartidos);

    for( let i = 0; i < this.partidoAsiento.length ; i++){
      for( let j = 0 ; j < this.asientos.length; j++){
         if(this.partidoAsiento[i].idAsiento === this.asientos[j].id){
           this.partidoAsiento[i].idAsiento = this.asientos[j];
           break;
         }
      }

    }

    for ( let  i = 0; i < this.proximosPartidos.length; i++) {
      this.proximosPartidos[i].idEquipoVisitante = this.equipos[this.proximosPartidos[i].idEquipoVisitante];
      this.proximosPartidos[i].idEquipoLocal = this.equipos[this.proximosPartidos[i].idEquipoLocal];
      this.proximosPartidos[i].idEstadio = this.estadios[this.proximosPartidos[i].idEstadio];

      for ( let j = 0; j < this.partidoAsiento.length;j++){
        if (this.proximosPartidos[i].id === this.partidoAsiento[j].idPartido){
          this.proximosPartidos[i].asientos.push(this.partidoAsiento[j]);
        }
      }


    }


  }

  getDisponibleString(input) {
    if (input){
      return 'Disponible'
    }

    else{
      return 'No Disponible'
    }

  }

  comprar(partAsiento: PartidoAsiento) {

    this.partidoservice.validarCompra(partAsiento, this._userService.usuario)
      .subscribe(
        res => {
          console.log('has realizado tu compra exitosamente');
          let rjson = res.json();
          console.log(rjson);
          partAsiento.disponible = false;
        },
        err => {
          partAsiento.disponible = false;
          partAsiento.error = true;
        }
      );


  }

}
