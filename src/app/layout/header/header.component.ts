import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public isActiveRoute(route: string): boolean {
    const currentRoute: string = this.router.url.split('?').shift();
    return currentRoute === route;
  }
}
