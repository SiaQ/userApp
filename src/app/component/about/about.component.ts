import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutUs = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

  constructor() { }

  ngOnInit(): void {
  }

}
