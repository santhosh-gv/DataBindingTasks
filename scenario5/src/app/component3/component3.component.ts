import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public text ="";
  
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  fireEvent(){
    this.childEvent.emit(this.text);    
  }

}
