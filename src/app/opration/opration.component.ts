  import { Component, OnInit } from '@angular/core';

  @Component({
  selector: 'app-opration',
  templateUrl: './opration.component.html',
  styleUrls: ['./opration.component.css']
})
export class OprationComponent implements OnInit {

  constructor() { }
  // val: number = 0;
  // valu: number = 0;
  a1 = 0;
  b1 = 0;
  c1 = 0;
  d1 = 0;
  // getAll(val: number, valu: number) {
  paresh(val, valu) {
    this.a1 = val + valu;
    this.b1 = val - valu;
    this.c1 = val * valu;
    this.d1 = val / valu;
    // this.a1 = parseInt(val) + parseInt(valu);
    // this.b1 = parseInt(val) - parseInt(valu);
    // this.c1 = parseInt(val) * parseInt(valu);
    // this.d1 = parseInt(val) / parseInt(valu);
  }

  ngOnInit(): void {
  }

}
