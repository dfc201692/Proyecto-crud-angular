import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    document: '',
    birthDate: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      // Aquí puedes manejar la lógica para enviar el formulario
      console.log('Formulario válido. Datos del usuario:', this.user);
      // Por ejemplo, podrías llamar a un servicio para enviar los datos al servidor
      // this.userService.registerUser(this.user).subscribe(response => {
      //   console.log('Usuario registrado con éxito:', response);
      // });
    } else {
      console.log('Formulario inválido. Verifica los campos.');
    }
  }
}
