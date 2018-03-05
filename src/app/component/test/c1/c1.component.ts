import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit, OnDestroy {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }
  timeout = true;
  tmpTimeout = null;
  checkVal = null;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();

  radioChecked = null;
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
    this.db.insertTestAnswer(this.checkVal, "test-C1", 1);
    this.parentEventHandler.emit({"nextPage":true});
  }
}
