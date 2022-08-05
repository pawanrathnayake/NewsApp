import { Component, OnInit } from '@angular/core';
import { NewsapisericesService } from '../service/newsapiserices.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _services:NewsapisericesService) { }

  topheadingdisplay :any = [];

  ngOnInit(): void {

    this._services.navbar().subscribe((result) => {
      console.log(result);
      this.topheadingdisplay = result.articles;
    })
  }

}

