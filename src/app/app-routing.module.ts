import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent }, // Configura tu ruta aquí
  // ... otras rutas ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
