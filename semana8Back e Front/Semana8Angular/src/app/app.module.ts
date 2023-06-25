import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotificationListComponent } from './component/notification-list/notification-list.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ExAulaComponent } from './component/ex-aula/ex-aula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './component/posts/posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    HeaderComponent,
    HeaderComponent,
    ExAulaComponent,
    PostsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
