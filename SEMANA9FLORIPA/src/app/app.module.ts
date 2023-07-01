import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BuscaComponent } from './component/busca/busca.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CardsComponent } from './component/cards/cards.component';
import { ResultadoPaiComponent } from './component/resultado-pai/resultado-pai.component';
import { PrivateComponent } from './layouts/private/private.component';
import { PublicComponent } from './layouts/public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent,
    EmitterComponent,
    FullComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    CardsComponent,
    ResultadoPaiComponent,
    PrivateComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
