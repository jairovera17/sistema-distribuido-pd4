import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/map';
import {Usuario} from '../misClasses/UsuarioClass';
import {UsuarioLogService} from "../usuario-log.service";
import {Http} from "@angular/http";





@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  signUp: boolean;
  signIn: boolean;
  @Output() logEvent = new EventEmitter();
  usuarioLocal: Usuario;
  usuarioLog: Usuario;

  constructor(private _http: Http, private servicioLog: UsuarioLogService) { }

  ngOnInit() {
    this.usuarioLog = new Usuario();
    this.signIn = false;
    this.signUp = false;
  }

  openSignIn(){
    this.signIn = true;
    this.signUp = false;
  }
  openSignUp(){
    this.signIn = false;
    this.signUp = true;
  }
  closeSign(){
    this.signIn = false;
    this.signUp = false;
  }

  logear(usuario) {

  this.servicioLog.logear(usuario.nickname, usuario.password)
    .subscribe(
      res => {
        const rjson: Usuario = res.json();



          this.servicioLog.setUsuario(rjson[0]);
          this.logEvent.emit(rjson[0]);


      },
      err => {
        console.log('error en servicio usuariolog get usuario');
      }
    );
  }




}
