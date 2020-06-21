import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadMoreComponent } from '../read-more/read-more.component';
declare var require: any;
var mockdata = require('../common/people.json');

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people = mockdata;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  open(p) {
    console.log(p);
    const modalRef = this.modalService.open(ReadMoreComponent, { size: 'lg' });
    modalRef.componentInstance.person = p;
  }
  // this.modalService.open(content, { size: 'lg' });
}
