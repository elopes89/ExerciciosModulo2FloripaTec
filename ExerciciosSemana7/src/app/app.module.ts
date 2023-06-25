import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TwoWayBindComponent } from './component/two-way-bind/two-way-bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { NewFormsComponent } from './component/new-forms/new-forms.component';
import { AppRoutingModule } from './app-routing.module';
import { RequisicaoComponent } from './component/requisicao/requisicao.component';
import { TesteFormComponent } from './component/teste-form/teste-form.component';
import { API_PATH } from 'src/environments/environment';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwoWayBindComponent,
    ReactiveFormsComponent,
    NewFormsComponent,
    RequisicaoComponent,
    TesteFormComponent,
    HeaderComponent
      
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, AppRoutingModule,
     HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
