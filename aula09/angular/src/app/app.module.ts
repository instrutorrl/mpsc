import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { Atividade1Component } from './paginas/atividade1/atividade1.component';
import { Atividade2Component } from './paginas/atividade2/atividade2.component';
import { Atividade3Component } from './paginas/atividade3/atividade3.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Atividade4Component } from './paginas/atividade4/atividade4.component';
import { Atividade5Component } from './paginas/atividade5/atividade5.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    Atividade1Component,
    Atividade2Component,
    Atividade3Component,
    ErroComponent,
    Atividade4Component,
    Atividade5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
