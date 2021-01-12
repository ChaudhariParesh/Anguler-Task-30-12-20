import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multable',
  templateUrl: './multable.component.html',
  styleUrls: ['./multable.component.css']
})
export class MultableComponent implements OnInit {

  constructor() { }
  
  na: number = 0;
  na1: number = 0;
  col: any = [];
  row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  startno(val) {

    if (this.na > this.na1) {
      val = this.na1;
    }
    if (val <= -1 || val == 0) {
      val = 1;
    }
    this.na = parseInt(val);
    this.calculate();
  }

  endno(val) {
    if (this.na1 < this.na) {
      val = this.na;
    }
    if (val <= -1 || val == 0) {
      val = 1;
    }
    this.na1 = parseInt(val);
    this.calculate();
  }
  calculate() {
    this.col.length = 0;
    for (let i = this.na; i <= this.na1; i++) {
      this.col.push(i);
    }
  }



  ngOnInit(): void {
  }

}
