import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:'principal', component:PrincipalComponent},
  {path:'comentarios', component:ComentariosComponent},
  {path:'', redirectTo:'/principal', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
