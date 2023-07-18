import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//http://localhost:4200

const routes: Routes = [
  { path : '', component : HomeComponent},                // /home          http://localhost:4200/    
  { path : 'login', component : LoginComponent},          // /login         http://localhost:4200/login
  { path : 'register', component : RegisterComponent},    // /register      http://localhost:4200/register
  { // Define ruta del modulo usando LaziLoad (Carga Perezosa) se realiz esto cuando sea requerida
    path : 'dashboard',
    loadChildren : ( ) => import('./protected/protected.module').then(module => module.ProtectedModule)
  },
  { path : '**', redirectTo : '' }                        // /hola          http://localhost:4200/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


                                                         
                                                         