import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routeBe = [
    {
      name : 'Home Page',
      path: '/home' 
    },
    {
      name : 'About Page',
      path: '/about' 
    },
    {
      name : 'Contact Page',
      path: '/contact' 
    },
    {
      name : 'Posts',
      path: '/posts' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
