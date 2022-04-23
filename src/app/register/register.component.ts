import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {

    this.registerForm = this.formbuilder.group({
      'name': ['',Validators.required],
      'username': ['',Validators.required],
      'email': ['',Validators.required],
      'password': ['',Validators.required],
      'confirmpassword': ['',Validators.required]
    })

  }

  ngOnInit(): void { }

  registerUser(){
    this.router.navigate(['../login'])
  }
}
