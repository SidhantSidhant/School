import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feair-card',
  templateUrl: './feair-card.component.html',
  styleUrls: ['./feair-card.component.scss']
})
export class FeairCardComponent implements OnInit {
 @Input() fearsarr :any;
 @Output() feairsObject: EventEmitter<any> = new EventEmitter<any>();
  date:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  onclickCard(card:any){
    this.feairsObject.emit(this.fearsarr);
    console.log(card);
  }
}
