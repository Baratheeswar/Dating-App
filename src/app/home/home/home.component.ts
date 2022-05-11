import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sideMenuToggle: boolean = false;
  userThemePreference: boolean = false;
  sideMenuArray: any = [
    {
      menuName: 'Dashboard',
      menuIcon: 'dashboard',
      routingUrl: 'dashboard'
    },
    {
      menuName: 'Discover',
      menuIcon: 'explore',
      routingUrl: 'discover'
    },
    {
      menuName: 'Messages',
      menuIcon: 'mail_outline',
      routingUrl: 'messages',
      notificationCount: 4
    },
    {
      menuName: 'Chat Request',
      menuIcon: 'chat_bubble_outline',
      routingUrl: 'chat-request',
      notificationCount: 10
    },
    {
      menuName: 'Profile',
      menuIcon: 'person_outline',
      routingUrl: 'profile'
    },
    {
      menuName: 'Logout',
      menuIcon: 'logout',
      routingUrl: ''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['../login']);
  }

  themeToggle(){
    this.userThemePreference = !this.userThemePreference
  }

  menuToggle() {
    // let sidebar = document.querySelector(".sidebar") as HTMLDivElement ;
    // sidebar.classList.toggle("active");
    this.sideMenuToggle = !this.sideMenuToggle;
  }

}
