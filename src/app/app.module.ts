import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './main/task/task.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CreateTaskComponent } from './main/create-task/create-task.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { ContactProfileComponent } from './main/contact-profile/contact-profile.component';
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
    SettingsComponent,
    CreateTaskComponent,
    ContactProfileComponent
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
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [DatePipe, authInterceptorProviders, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
