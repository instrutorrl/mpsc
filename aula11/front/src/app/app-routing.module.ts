import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarGuard } from './autenticar.guard';
import { AdminComponent } from './componentes/admin/admin.component';
import { LoginComponent } from './componentes/login/login.component';
import { LazerComponent } from './componentes/postagens/lazer/lazer.component';
import { NoticiasComponent } from './componentes/postagens/noticias/noticias.component';
import { SaudeComponent } from './componentes/postagens/saude/saude.component';
import { TecnologiaComponent } from './componentes/postagens/tecnologia/tecnologia.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path:'principal',  component:PrincipalComponent},
  {path:'saude',      component:SaudeComponent},
  {path:'tecnologia', component:TecnologiaComponent},
  {path:'lazer',      component:LazerComponent},
  {path:'noticias',   component:NoticiasComponent},
  {path:'login',      component:LoginComponent},
  {path:'admin',      component:AdminComponent,     canActivate:[AutenticarGuard]},
  {path:'',   redirectTo:'/principal',     pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
