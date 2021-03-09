import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {TaskComponent} from './main/task/task.component';
import {StatisticComponent} from './main/statistic/statistic.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {TimelineComponent} from './main/timeline/timeline.component';
import {MainComponent} from './main/main.component'
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user/user.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent }   from './not-found/not-found.component';
import {HeaderComponent} from './header/header.component'
import {SettingsComponent} from './settings/settings.component'

const routes: Routes = [
{ path: "", component:  MainComponent, children: [
  { path: "task", component: TaskComponent},
  { path: "statistic", component: StatisticComponent},
  { path: "contacts", component: ContactsComponent},
  { path: "timeline", component: TimelineComponent}
]},
{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "user", component: UserComponent},
{ path: "profile", component: ProfileComponent},
{path: "settings", component: SettingsComponent},
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
