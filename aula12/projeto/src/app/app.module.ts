import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoedaPipe } from './moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    PipeComponent,
    MoedaPipe
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
