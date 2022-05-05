import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userThemePreference: boolean = false;
  sideMenuToggle: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['../login']);
  }

  themeToggle(){
    this.userThemePreference = !this.userThemePreference
  }

  menuToggle(){
    this.sideMenuToggle = !this.sideMenuToggle;
  }

}
