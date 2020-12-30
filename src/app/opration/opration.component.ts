import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opration',
  templateUrl: './opration.component.html',
  styleUrls: ['./opration.component.css']
})
export class OprationComponent implements OnInit {

  constructor() { }

    a=0;
      getAdd(val1,val2){
        this.a=parseInt(val1) + parseInt(val2);
      }
      getSub(val1,val2){
        this.a=parseInt(val1) - parseInt(val2);
      }
      getMul(val1,val2){
        this.a=parseInt(val1) * parseInt(val2)
      }
      getDiv(val1,val2){
        this.a=parseInt(val1) / parseInt(val2);
      }
  ngOnInit(): void {
  }

}
