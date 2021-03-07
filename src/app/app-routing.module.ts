import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {MainComponent} from './main/main.component'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {TaskComponent} from './task/task.component';
import {UserComponent} from './user/user.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent }   from './not-found/not-found.component';
import {HeaderComponent} from './header/header.component'

const routes: Routes = [
{ path: "", component:  MainComponent},
{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "task", component: TaskComponent },
{ path: "user", component: UserComponent},
{ path: "profile", component: ProfileComponent},
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
