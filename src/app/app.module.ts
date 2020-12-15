import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './shared/directives/change-text.directive';
import { ChildComponent } from './child/child.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';
import { RedDirective } from './shared/directives/red.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    ChildComponent,
    CicloComponent,
    MarcaTextoDirective,
    RedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
