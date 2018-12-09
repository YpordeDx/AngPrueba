import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DetalleComponent } from './detalle/detalle.component';
const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full'},
   {path: 'login', component: LoginComponent},
   {path: 'users', component: UsersComponent},
   {path: 'detail', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
