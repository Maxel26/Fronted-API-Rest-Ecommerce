import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//  Atributo de la clase
  loginForm : FormGroup = this.fb.group({
    email : [
      '',     //Valor prederterminado del campo
      [       // Validaciones
        Validators.required,
        Validators.email 
      ]
    ],
    password : [
      '',     //Valor prederterminado del campo
      [       // Validaciones
      Validators.required,
      Validators.minLength( 8 ) 
      ]
    ]
  });
 
 
   // Inyeccion de dependencias 
  constructor( private fb : FormBuilder) {
    
  }

  // Logear
  login() {
    console.group('loginForm');
    console.info(this.loginForm.value);
    console.info(this.loginForm.valid);
    console.groupEnd();                      
  }
}
