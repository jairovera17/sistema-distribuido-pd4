import { Injectable } from '@angular/core';
import {Usuario} from './misClasses/UsuarioClass';
import {Http} from '@angular/http';
import {MasterUrlService} from './master-url.service';
import 'rxjs/add/operator/map';
@Injectable()
export class UsuarioLogService {


  usuario: Usuario;

  constructor(private masterurl: MasterUrlService, private _http: Http) { }

  logear(nick, password) {
    const ert = this.masterurl.getUsuarioURL() +
      '?nickname=' + nick +
      '&password=' + password;
    console.log(ert);
   return this._http
      .get(this.masterurl.getUsuarioURL() +
      '?nickname=' + nick +
      '&password=' + password);
        }

  setUsuario(user) {
    if (user.nombre) {
      this.usuario = user;
    }

  }

}
