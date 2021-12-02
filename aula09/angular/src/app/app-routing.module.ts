import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade1Component } from './paginas/atividade1/atividade1.component';
import { Atividade2Component } from './paginas/atividade2/atividade2.component';
import { Atividade3Component } from './paginas/atividade3/atividade3.component';
import { Atividade4Component } from './paginas/atividade4/atividade4.component';
import { Atividade5Component } from './paginas/atividade5/atividade5.component';
import { ErroComponent } from './paginas/erro/erro.component';

const routes: Routes = [
  {path:'atividade1', component:Atividade1Component},
  {path:'atividade2', component:Atividade2Component},
  {path:'atividade3', component:Atividade3Component},
  {path:'atividade4', component:Atividade4Component},
  {path:'atividade5', component:Atividade5Component},
  {path:'', redirectTo:'/atividade1', pathMatch:'full'},
  {path:'**', component:ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
