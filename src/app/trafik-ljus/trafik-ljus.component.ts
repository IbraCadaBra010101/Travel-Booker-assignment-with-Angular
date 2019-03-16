import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trafik-ljus',
  templateUrl: './trafik-ljus.component.html',
  styleUrls: ['./trafik-ljus.component.css']
})
export class TrafikLjusComponent implements OnInit {
  value = 0;
  green = false;
  red = true;
  yellow = false;

  constructor() {
  }

  ngOnInit() {
  }

  ClickToDrive() {
    if (this.value === 0) {
      this.value++;
      this.green = false;
      this.yellow = true;
      this.red = true;
    } else if (this.value === 1) {
      this.value++;
      this.green = true;
      this.yellow = false;
      this.red = false;

    } else if (this.value === 2) {
      this.value++;
      this.green = false;
      this.yellow = true;
      this.red = false;
    } else {
      this.red = true;
      this.yellow = false;
      this.green = false;
      this.value = 0;
    }

  }

}
