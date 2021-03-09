import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './main/task/task.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { StatisticComponent } from './main/statistic/statistic.component';
import { TimelineComponent } from './main/timeline/timeline.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SettingsComponent } from './settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    UserComponent,
    ProfileComponent,
    PopupComponent,
    NotFoundComponent,
    HeaderComponent,
    MainComponent,
    StatisticComponent,
    TimelineComponent,
    ContactsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
