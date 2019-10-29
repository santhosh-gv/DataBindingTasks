import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit{

  public text ="";
  @Output() public parentEvent = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  }

  text2(value){
    this.text=value;
    this.parentEvent.emit(this.text);
  }


}
