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
    const link = this.masterurl.getUsuarioURL() +
      '?nickname=' + nick +
      '&password=' + password;
    console.log(link);
   return this._http
      .get(this.masterurl.getUsuarioURL() +
      '?nickname=' + nick +
      '&password=' + password);
        }

  registrar(user) {
    const link = this.masterurl.getUsuarioURL();
    return this._http.post(link, user);

  }

  setUsuario(user) {
    if (user) {
      this.usuario = user;
    }

  }

}
