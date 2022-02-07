import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  registro(){
    console.log(this.miFormulario.value);
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro(name, email, password)
      .subscribe( ok => {

        console.log( ok );

        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');

        } else {
          Swal.fire( 'Error', ok, 'error' );

        }
      } )
  }

}
