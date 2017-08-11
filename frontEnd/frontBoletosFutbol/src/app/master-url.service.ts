import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {

  UsuarioURL = 'http://localhost:1337/Usuario';

  constructor() { }


  getUsuarioURL() {
    return this.UsuarioURL;
  }

}

