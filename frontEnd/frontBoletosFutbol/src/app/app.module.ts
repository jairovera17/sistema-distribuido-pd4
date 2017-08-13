import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { LogInComponent } from './log-in/log-in.component';
import {UsuarioLogService} from './usuario-log.service';
import {MasterUrlService} from './master-url.service';
import { MainViewComponent } from './main-view/main-view.component';
import { ViewPartidosComponent } from './view-partidos/view-partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LogInComponent,
    MainViewComponent,
    ViewPartidosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/mainView',
        pathMatch: 'full'
      },
      {
        path: 'mainView',
        component: MainViewComponent
      }
    ])
  ],
  providers: [UsuarioLogService, MasterUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
