import { Component, OnInit } from '@angular/core';
import { URL_LOGO_HEADER } from '@data/constants/url-image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public imgLogo: string;

  constructor() { }

  ngOnInit(): void {
    this.imgLogo = URL_LOGO_HEADER;
  }

}
