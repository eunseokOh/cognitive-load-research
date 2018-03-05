import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'

@Component({
  selector: 'app-n2',
  templateUrl: './n2.component.html',
  styleUrls: ['./n2.component.css']
})
export class N2Component implements OnInit, OnDestroy {
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }
  timeout:boolean = false;
  tmpTimeout = null;
  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();
  
  @ViewChild('numberInputForm') numberInputForm:ElementRef;
  

  numberList = [
    18,
    19,
    21,
    27,
    54,
    77,
    76,
    23,
    91,
    28,
    51,
    71,
    26,
    77,
    26
  ]
  inputNumberList = [
  ];

  constructor(private commons:CommonsService, private db:DbService) { 

    
  }
  ngOnDestroy(){
    if(this.tmpTimeout) clearTimeout(this.tmpTimeout);
  }

  ngOnInit() {
    this.tmpTimeout = setTimeout(()=>{
      this.timeout = true;
      let tmpInterval = setInterval(() => {
        let firstIpt = <HTMLInputElement> document.getElementById("firstIpt");
        if(firstIpt){
          firstIpt.focus();
          clearInterval(tmpInterval);
        }
      }, 200);

      this.tmpTimeout = setTimeout(()=>{
        this.inputNumbers();
        this.tmpTimeout = null;
      },1000*20)
    },1000*30);
  }

  keyEvent(event){
    this.commons.onlyInputNumbers(event);
  }

  inputNumbers(){
    let forms = <HTMLFormElement> this.numberInputForm.nativeElement;
    for(let i=0; i<forms.elements.length; i++){
      let item = <HTMLInputElement>forms.elements.item(i);
      if(item != null){
          this.inputNumberList.push(item.value);
        //
      }
    }

    this.db.insertTestAnswer(this.inputNumberList.toString(), "test-N2", this.numberList.toString());
    

    this.parentEventHandler.emit({"nextPage":true});
  }

}
