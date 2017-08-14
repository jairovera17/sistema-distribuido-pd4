import { Injectable } from '@angular/core';
import {MasterUrlService} from "./master-url.service";
import {Http} from "@angular/http";
import {Equipo} from "./misClasses/EquipoClass";
import {Partido} from "./misClasses/PartidoClass";

@Injectable()
export class PartidosService {

  proximosPartidosPath = '/getProximosPartidos';
  proximosPartidos: Partido[];
  equipos: Equipo[];

  constructor(private masterurl: MasterUrlService, private _http: Http) {
    this._http.get(this.masterurl.EquipoURL)
      .subscribe(
        res=>{
          let rjson: Equipo[]= res.json();
          this.equipos=rjson;

        },err=>{}
      );

  }

  getProximosPartidos() {
    return this._http
      .get(this.masterurl.PartidoURL + this.proximosPartidosPath);
  }

  getEquipos() {
    return this._http
      .get(this.masterurl.EquipoURL);
  }

  getEstadios(){
    return this._http
      .get(this.masterurl.EstadioURL);
  }

}
