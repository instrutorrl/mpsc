import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { SaudeComponent } from './componentes/postagens/saude/saude.component';
import { TecnologiaComponent } from './componentes/postagens/tecnologia/tecnologia.component';
import { LazerComponent } from './componentes/postagens/lazer/lazer.component';
import { NoticiasComponent } from './componentes/postagens/noticias/noticias.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    RodapeComponent,
    SaudeComponent,
    TecnologiaComponent,
    LazerComponent,
    NoticiasComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
