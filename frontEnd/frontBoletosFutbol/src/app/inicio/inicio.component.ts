import { Component, OnInit } from '@angular/core';
import {Usuario} from "../misClasses/UsuarioClass";
import {UsuarioLogService} from "../usuario-log.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario;
  constructor(private logService: UsuarioLogService) { }

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

}
