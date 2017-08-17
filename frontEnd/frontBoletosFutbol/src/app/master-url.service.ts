import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {

  direccionBackEnd = 'localhost:1337'
  UsuarioURL = 'http://' + this.direccionBackEnd + '/Usuario';
  PartidoURL = 'http://' + this.direccionBackEnd + '/Partido';
  EquipoURL  = 'http://' + this.direccionBackEnd + '/Equipo';
  EstadioURL = 'http://' + this.direccionBackEnd + '/Estadio';
  AsientoURL = 'http://' + this.direccionBackEnd + '/Asiento';
  BoletoURL  = 'http://' + this.direccionBackEnd + '/Boleto';
  PartidoAsientoURL = 'http://' + this.direccionBackEnd + '/PartidoAsiento';
  constructor() { }



}

