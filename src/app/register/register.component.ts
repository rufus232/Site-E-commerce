import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import { AuthentificationService } from '../authentification.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  RegisterForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });
  constructor(private authentificationService: AuthentificationService, private router: Router) {}
  register() {
    const postData = {
      password: this.RegisterForm.value.password,
      email: this.RegisterForm.value.email,
      nom: this.RegisterForm.value.lastName,
      prenom: this.RegisterForm.value.firstName
    };
    this.authentificationService.register(postData).subscribe((data: any) => {
      console.log(data) ;
      if(data.status == 'Inscription effectuée'){
        this.router.navigate(['/login']);
      }
    });
  }
}
