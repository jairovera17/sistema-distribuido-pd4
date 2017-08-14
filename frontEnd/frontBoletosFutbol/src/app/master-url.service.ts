import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {

  direccionBackEnd = '192.168.1.5:1337'
  UsuarioURL = 'http://' + this.direccionBackEnd + '/Usuario';
  PartidoURL = 'http://' + this.direccionBackEnd + '/Partido';
  EquipoURL  = 'http://' + this.direccionBackEnd + '/Equipo';
  EstadioURL = 'http://' + this.direccionBackEnd + '/Estadio';
  constructor() { }



}

