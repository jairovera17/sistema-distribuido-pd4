import { Component, OnInit } from '@angular/core';
import {Usuario} from "../misClasses/UsuarioClass";
import {UsuarioLogService} from "../usuario-log.service";
import {Http} from "@angular/http";
import {PartidoAsiento} from "../misClasses/PartidoAsientoClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario;
  constructor(private logService: UsuarioLogService, private _http: Http) { }

  ngOnInit() {

  }

  setUsuario(user: Usuario) {

    if (user) {
      this.usuario = user;
    }

  }
  logOut() {
    this.usuario = undefined;
    this.logService.usuario = undefined;
  }

  ///estos metodos solo se usan para poblar la base
  llenarAsientos() {
    let url = 'http://localhost:1337/Asiento';
    let secciones = ['GENERAL NORTE',
                    'GENERAL SUR',
                    'PALCOS',
                    'TRIBUNA',
                    'PALCOS VIP'];


    for( var i = 0; i < secciones.length;i++){
      for(var j =0;j<2;j++){
        for(var k=1;k<=10;k++) {


          var w = new Asiento(secciones[i], String.fromCharCode(65 + j),k);
          this._http
            .post(url, w)
            .subscribe(
              res => {
               console.log(res.json());
              },
              err => {
                console.log('error guardando asiento');
              }
            )
        }
        }
      }
      console.log('listo');

    }

  llenarEquipos(){

   let url = 'http://localhost:1337/Equipo';
    let equipos = ['BARCELONA',
      'LIGA DE QUITO',
      'AUCAS',
      'INDEPENDIENTE',
      'EMELEC',
      'NACIONAL',
      'DEPORTIVO CUENCA',
      'DEPORTIVO QUITO',
      'MACARA',
      'ECUADOR',
      'FRANCIA',
      'ITALIA',
      'BRAZIL',
      'ALEMANIA'];


    for(var i = 0; i < equipos.length;i++){

          var w = new Equipo(equipos[i])
          this._http
            .post(url, w)
            .subscribe(
              res => {
                //   console.log(res.json());
              },
              err => {
                console.log('error guardando equipo');
              }
            )

    }

  }

  llenarPartidos(){

    let url = 'http://localhost:1337/Partido';
    let fecha = new Date();

    for ( var i = 1; i <= 5 ; i ++) {
      var fechaPartido = new Date(fecha.getFullYear(),fecha.getMonth()+1+i,fecha.getDate()+i);
      var w = new Partido(i, i + 1, i, fechaPartido);
      this._http
        .post(url, w)
        .subscribe(
          res => {
            //   console.log(res.json());
          },
          err => {
            console.log('error guardando partido');
          }
        )
    }


    }

    llenarPartidosAsientos(){
    let url = 'http://localhost:1337/PartidoAsiento';

      let secciones = ['GENERAL NORTE',
        'GENERAL SUR',
        'PALCOS',
        'TRIBUNA',
        'PALCOS VIP'];
var index=1;
let numPartidos = 5;

      for( var i = 1; i <numPartidos ;i++){

        for ( var j = 1 ;j < 50; j+=5){

          var precio =5;
          if(j<10)
            precio=10;
          if(j>=10&&j<20)
            precio=20
          if(j>=20&&j<30)
            precio=30
          if(j>=30&&j<40)
            precio=40
          if(j>=40)
            precio=50

          let partAsiento= new PartidoAsiento(index,j,precio,true,i);
          index++;
          this._http
            .post(url,partAsiento)
            .subscribe(
              res => {
                console.log(res.json());
              },
              err => {
                console.log('error en partidoAsiento');
              }
            )
        }


      }
      console.log('listo');

    }

  llenarEstadios(){

    let url = 'http://localhost:1337/Estadio';
     let estadios= [
       'Gonzalo Pozo Ripalda', 'Quito', 'Ave. Rumichaca y Moromoro',
       'Olimpico Atahualpa', 'Quito', 'Ave. 6 de Diciembre, y Naciones Unidas',
       'Isidro Romero Carbo', 'Guayaquil', 'Ave. Barcelona',
       'Bellavista', 'Ambato', 'Ave. Bolivariana y Bellavista',
       'Jocay', 'Manta', 'Ave 113 y 307'
     ];

    for ( var i = 0; i < estadios.length ; i +=3) {
      var w = new Estadio(estadios[i], estadios[i + 1], estadios[i + 2]);
      this._http
        .post(url, w)
        .subscribe(
          res => {
            //   console.log(res.json());
          },
          err => {
            console.log('error guardando partido');
          }
        )
    }


  }


}

class Estadio{
  constructor(
    public nombre:string,
    public ciudad:string,
    public direccion:string
  ){

  }
}
class Partido{
  constructor(
    public idEquipoLocal,
    public idEquipoVisitante,
    public idEstadio,
    public fecha:Date
  ){}
}
class Asiento {
  constructor(
    public seccion: string,
    public fila: string,
    public numero: number
  ) {

  }
}
class Equipo{
  constructor(
    public nombre:string
  ){

  }
}
