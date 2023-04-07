import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feair-details',
  templateUrl: './feair-details.component.html',
  styleUrls: ['./feair-details.component.scss']
})
export class FeairDetailsComponent implements OnInit {
@Input() objSend :any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.objSend);
    
     
  }

}
