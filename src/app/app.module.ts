import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeairComponent } from './sheard/componend/feair/feair.component';
import { FeairCardComponent } from './sheard/componend/feair-card/feair-card.component';
import { FeairDetailsComponent } from './sheard/componend/feair-details/feair-details.component';
import { NavbarComponent } from './sheard/componend/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeairComponent,
    FeairCardComponent,
    FeairDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
