import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.loginForm = this.formBuilder.group({
      'username': ['',Validators.required],
      'password': ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['../datingapp/'])
  }
}
