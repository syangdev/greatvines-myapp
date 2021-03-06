import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './libs/auth/auth.guard';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreateComponent as CreateContact } from './components/contacts/components/create/create.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: 'contacts/create', component: CreateContact, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
