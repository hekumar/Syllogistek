import { Component, OnInit } from '@angular/core';
declare var require: any;
var data = require('../common/testimonial.json');

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  students = data;
  constructor() { }

  ngOnInit() {
  }

}
