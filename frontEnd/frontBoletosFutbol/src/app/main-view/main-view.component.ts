import { Component, OnInit } from '@angular/core';
import {Usuario} from "../misClasses/UsuarioClass";
import {UsuarioLogService} from "../usuario-log.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  usuario: Usuario;
  constructor(private userLog: UsuarioLogService) { }

  ngOnInit() {
    this.usuario = this.userLog.usuario;
  }

}
