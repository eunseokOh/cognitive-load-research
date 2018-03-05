import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy, Directive } from '@angular/core';
import {CommonsService} from '../../../service/commons.service'
import {DbService} from '../../../service/db.service'
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-n1',
  templateUrl: './n1.component.html',
  styleUrls: ['./n1.component.css']
})
export class N1Component implements OnInit, OnDestroy {

  
  @Output()
  outputData = {
      alertMsg: null,
      showNextBtn:false,
      showBorder:true
  }

  @Output()
  parentEventHandler:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('numberInputForm') numberInputForm:ElementRef;
  
  timeout:boolean = false;
  tmpTimeout = null;

  numberList = [
    3,
    4,
    7,
    9,
    1,
    7,
    8,
    8,
    8,
    1,
    1,
    7,
    2,
    8,
    8
  ]
  inputNumberList = [];
  constructor(private commons:CommonsService, private db:DbService) { 
 
  }

  ngOnDestroy(){
    if(this.tmpTimeout) clearTimeout(this.tmpTimeout);
  }

  ngOnInit() {
    
    let numberCard = document.querySelectorAll('.number-card');
    
    for(let i=0; i<numberCard.length; i++){
      
      numberCard[i].addEventListener("keydown", (keyCode)=>{
        //console.log(keyCode)
      })
    }

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
    //console.log(this.inputNumberList);
    //console.log(this.numberList);
    this.db.insertTestAnswer(this.inputNumberList.toString(), "test-N1", this.numberList.toString());
    this.parentEventHandler.emit({"nextPage":true});
  }
  hello(){
    alert("hello")
  }
}

