import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
declare var require: any;
var slides = require('../common/slides.json');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // images = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15,16,17].map((n) => `../../assets/slides/${n}.jpg`);
  images = slides;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
   }

  ngOnInit() {
  }

}
