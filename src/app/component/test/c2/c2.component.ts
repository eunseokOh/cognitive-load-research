import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit, OnDestroy {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }
  checkVal = null;
  timeout = true;
  tmpTimeout = null;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  constructor(private db:DbService) { }
  ngOnDestroy(){
    if(this.tmpTimeout) clearTimeout(this.tmpTimeout);
    
  }
  ngOnInit() {
    this.tmpTimeout = setTimeout(()=>{
      this.inputCal()
    },1000*30);
  }
  checkRadio(val){
  
    this.checkVal = val;
    //console.log(this.checkVal)
    //this.parentEventHandler.emit({"showNextPage":true});
  }

  inputCal(){
    
    this.db.insertTestAnswer(this.checkVal, "test-C2", 2);
    this.parentEventHandler.emit({"nextPage":true});
  }

}
