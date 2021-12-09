import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path:'rxjs', component:RxjsComponent},
  {path:'pipe', component:PipeComponent},
  {path:'', redirectTo:'/rxjs', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
