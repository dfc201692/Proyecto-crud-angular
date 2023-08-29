import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule para configurar las rutas
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    RouterModule.forRoot([]), // Configura tus rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
