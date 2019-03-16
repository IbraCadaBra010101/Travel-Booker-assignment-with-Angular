import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Output() parentMessage;

  constructor() {
  }

  cities: any;

  receiveMessage($event) {
    this.cities = $event;
    this.parentMessage =  this.cities.name;
    console.log(this.parentMessage);
  }

  ngOnInit() {
  }

}
