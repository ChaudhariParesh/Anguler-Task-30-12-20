import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {
  arr = ['paresh', 'sham', 'naynesh', 'vijay', 'kaya'];
  arrr = [
    {
      fullname: [{ fname: 'Naynesh', mname: 'Raghunath', lname: 'Rathod' }], age: 26, marks: 66.5, sub: [
        {
          eng: 25, hin: 55, mar: 70, math: [
            { m1: 60, m2: 40, m3: 50 }
          ]
        }
      ]
    },
    {
      fullname: [{ fname: 'Paresh', mname: '', lname: 'Chaudhari' }], age: 23, marks: 85.5, sub: [
        {
          eng: 74, hin: 35, mar: 86, math: [
            { m1: 40, m2: 30, m3: 40 }
          ]
        }]
    },
    {
      fullname: [{ fname: 'Sham', mname: 'Murlidhar', lname: '' }], age: 29, marks: 76.5, sub: [
        {
          eng: 36, hin: 85, mar: 44, math: [
            { m1: 50, m2: 60, m3: 80 }
          ]
        }]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
