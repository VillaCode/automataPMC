import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Automata } from './app.component';
import { Verificadores } from './Services/verificadores';
import { ServicioUnicode } from './Services/unicode';

@NgModule({
  declarations: [
    Automata
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    Verificadores,
    ServicioUnicode

  ],
  bootstrap: [Automata]
})
export class AppModule { }
