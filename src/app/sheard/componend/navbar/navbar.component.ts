import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navbarArr:string[] = ["Dashbord","find a job", "iss leaederShipe search" , "Iss School elpolorr", "My Applications, Messages"]
  ngOnInit(): void {
  }

}
