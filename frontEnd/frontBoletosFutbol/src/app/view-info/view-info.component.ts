import { Component, OnInit } from '@angular/core';
import {Usuario} from '../misClasses/UsuarioClass';
import {UsuarioLogService} from '../usuario-log.service';
import {PartidosService} from '../partidos.service';
import {Boleto} from '../misClasses/BoletoClass';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {

  usuario: Usuario;
  misBoletos: Boleto[];
  showBoletos = true;
  miReporte: any;
  constructor(private partidoService: PartidosService, private userService: UsuarioLogService) { }

  ngOnInit() {
    this.showBoletos=true;
    this.usuario = this.userService.usuario;
    this.getBoletos(this.usuario);
    this.getReporte(this.usuario);
  }

  getReporte(usuario){
    this.partidoService.getReporteUsuario(this.usuario)
      .subscribe(
        res => {
          let rjson = res.json();
          this.miReporte = rjson;
        },
        err => {
          console.log('error en getreporte');

        }
      )

  }
  getBoletos(usuario) {
    this.partidoService.getBoletos(this.usuario)
      .subscribe(
        res => {
          let rjson: Boleto[] = res.json();
          console.log(rjson);
          this.misBoletos = rjson;
          this.showBoletos=false;
        },
        err=>{
          console.log('error');

        }
      );

  }


}
