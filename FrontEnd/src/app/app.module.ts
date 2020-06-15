import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageHeaderComponent } from './mainpage-header/mainpage-header.component';
import { MainpageFooterComponent } from './mainpage-footer/mainpage-footer.component';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageHeaderComponent,
    MainpageFooterComponent,
    MainpageHomeComponent,
    MainPageComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
